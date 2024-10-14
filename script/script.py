import requests

def get_finance():
    url = 'http://localhost:8088/finance'

    try:
        response = requests.get(url)

        if response.status_code == 200:
            print("Finanace API Success")
        else:
            print('Error:', response.status_code)
            return None
    except Exception as e: 
        print("error occured") 

def get_properties():
    url = 'http://localhost:8088/properties'

    try:
        response = requests.get(url)

        if response.status_code == 200:
            print("Properties API Success")
        else:
            print('Error:', response.status_code)
            return None
    except Exception as e: 
        print("error occured") 

def main():

    get_finance()
    get_properties()


if __name__ == '__main__':
    main()
