import requests
from bs4 import BeautifulSoup

def fetch_url_content(url):
    headers = {'User-Agent': 'Mozilla/5.0'}
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        print(f"An error occurred while fetching the URL: {e}")
        return None

def extract_table_data(section_title, soup):
    data_dict = {}
    try:
        for section in soup.find_all("section"):
            h3_tag = section.find("h3")
            if h3_tag and h3_tag.text == section_title:
                table = section.find("table")
                if table:
                    for row in table.find_all("tr"):
                        th = row.find("th")
                        td = row.find("td")
                        if th and td:
                            key = th.text.strip()
                            value = td.text.strip()
                            data_dict[key] = value
    except Exception as e:
        print(f"An error occurred while extracting data: {e}")
    return data_dict

def scrape_phone_data(url):
    html_content = fetch_url_content(url)
    if html_content:
        try:
            soup = BeautifulSoup(html_content, 'html.parser')
        except Exception as e:
            print(f"An error occurred while parsing HTML: {e}")
            return None

        # Extract phone name
        phone_name_element = soup.find('li', {'class': 'active'})
        if phone_name_element:
            phone_name = phone_name_element.find('span').text.strip()
        else:
            phone_name = "Unknown"

        sections_to_extract = [
            "Display",
            "Hardware",
            "Battery",
            "Camera",
            "Design",
            "Cellular",
            "Multimedia",
            "Connectivity & Features"
        ]

        extracted_data = {}
        for section in sections_to_extract:
            extracted_data[section] = extract_table_data(section, soup)

        return extracted_data, phone_name  # Return both the extracted data and the phone name
