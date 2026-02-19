import json
import sys
from urllib.parse import urlparse

def analyze_har(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            har_data = json.load(f)
    except Exception as e:
        print(f"Error reading HAR file: {e}")
        return

    log = har_data.get('log', {})
    pages = log.get('pages', [])
    entries = log.get('entries', [])

    if not pages:
        print("No page data found in HAR.")
    else:
        page = pages[0]
        page_timings = page.get('pageTimings', {})
        print(f"--- Page Load Summary ---")
        print(f"Title: {page.get('title')}")
        print(f"OnLoad: {page_timings.get('onLoad', 'N/A')} ms")
        print(f"Content Load: {page_timings.get('onContentLoad', 'N/A')} ms")
        
    print(f"\n--- Resource Analysis (Top 10 by Size) ---")
    # Sort entries by bodySize
    sorted_by_size = sorted(entries, key=lambda x: x['response']['content'].get('size', 0), reverse=True)
    
    total_size = 0
    total_requests = len(entries)
    
    for i, entry in enumerate(sorted_by_size[:10]):
        req = entry['request']
        res = entry['response']
        content = res['content']
        size_kb = content.get('size', 0) / 1024
        url = req['url']
        parsed_url = urlparse(url)
        filename = parsed_url.path.split('/')[-1] or parsed_url.path
        
        # Check for compression
        encoding = "None"
        for header in res['headers']:
            if header['name'].lower() == 'content-encoding':
                encoding = header['value']
                
        print(f"{i+1}. {filename[:50]:<50} | {size_kb:.2f} KB | {res['content']['mimeType']} | Encoding: {encoding}")
        total_size += content.get('size', 0)

    print(f"\nTotal Requests: {total_requests}")
    print(f"Total Page Size: {total_size / 1024 / 1024:.2f} MB")

    print(f"\n--- Slowest Requests (Time) ---")
    sorted_by_time = sorted(entries, key=lambda x: x['time'], reverse=True)
    for i, entry in enumerate(sorted_by_time[:5]):
        req = entry['request']
        time_ms = entry['time']
        url = req['url']
        parsed_url = urlparse(url)
        filename = parsed_url.path.split('/')[-1] or parsed_url.path
        print(f"{i+1}. {filename[:50]:<50} | {time_ms:.2f} ms | Status: {entry['response']['status']}")

    print(f"\n--- Cache Control Issues ---")
    for entry in entries:
        req = entry['request']
        res = entry['response']
        url = req['url']
        
        # Only check our own assets
        if 'bettermice.com' in url or 'localhost' in url:
             has_cache = False
             for header in res['headers']:
                 if header['name'].lower() == 'cache-control':
                     has_cache = True
                     # print(f"Cache: {header['value']} for {url.split('/')[-1]}")
             if not has_cache:
                 print(f"MISSING Cache-Control: {url.split('/')[-1]}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python analyze_har.py <path_to_har>")
    else:
        analyze_har(sys.argv[1])
