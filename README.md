#  Google Tag Manager (GTM)Scripts 
## License
This script is licensed under the MIT License.
Copyright (c) 2023 Ahmad Ismail

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# The Scripts

## Google Ads Conversion Tracking Tag in Google Tag Manager
**This script allows you to create a Google Ads Conversion Tracking tag in Google Tag Manager (GTM) using the Google Apps Script API.**

**The tag can be triggered using one of the following trigger types:**

- Click
- DOM Ready
- Window Loaded
- Just Links
- Form Submission
- Custom Event
- You can also add custom event filters to the trigger.

### Prerequisites
**Before using this script, you need to set up the following:**

- A Google Cloud Platform project with the Tag Manager API enabled
- A GTM container with the Google Ads Conversion Tracking tag template added
- Your GTM container ID
- Your Google Ads Conversion ID and Label

### Usage
**To use this script, follow these steps:**

1. Copy the script code and paste it into a new script file in your Google Apps Script editor.
2. Replace the GTM account ID and container ID with your own values.
3. Replace the conversion ID, conversion label, and send-to value with your own values.
4. Call the createGoogleAdsConversionTag() function with the appropriate trigger type and trigger filters (optional).
