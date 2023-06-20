#  Google Tag Manager (GTM) Script
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

# The Script

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

Make sure to replace the placeholders in the code with your actual GTM Account ID, Container ID, Conversion ID, Conversion Label, and Google Ads Conversion ID and Label.

You can use the function **createGoogleAdsConversionTag(triggerType, triggerFilters)** to create the tag
Here's an explanation of how to use the function:

1- **triggerType**: This parameter allows you to specify the type of trigger you want to create. You can choose from the following options:

**'click'**: Click trigger
**'domready'**: DOM Ready trigger
**'windowload'**: Window Loaded trigger
**'justlinks'**: Just Links trigger
**'formsubmit'**: Form Submission trigger
**'custom'**: Custom Event trigger

2- **triggerFilters**: This parameter is an array that allows you to specify custom event filters for the trigger. You can provide any necessary filters based on your requirements.

  After creating the trigger and conversion tag, the function links the tag to the trigger and saves the container.

  To use the function, you can call it with the desired trigger type and trigger filters. Here's an example:
  
  **createGoogleAdsConversionTag('click', ['{{Click Element}} matches CSS selector .btn', '{{Click URL}} contains /checkout']);**
  This example creates a Click trigger with custom event filters where the click element matches the CSS selector .btn and the click     URL contains /checkout.

Please adapt the code according to your specific requirements and replace the placeholder values with the actual ones for successful   implementation.
