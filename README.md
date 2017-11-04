# Hack-UMass-2017

> Project description here

## Table of Contents

- [Overview](#overview)
  - [Tools](#tools)
  - [Front-End](#front-end)
    - [Website](#website)
      - [Tree Structure of Website](#tree-structure-of-website)
      - [Core Components of the Website](#core-components-of-the-website)
        - [Pharma Search](#pharma-search)
        - [Symptom Search](#symptom-search)
        - [Dispenser Device Web UI](#dispenser-device-web-ui)
  - [Back End](#back-end)
    - [API](#api)
        - [Algolia](#algolia)
        - [Google Maps](#google-maps)
  - [Hardware](#hardware)
    - [Dispenser Device](#dispenser-device)
- [Competing Prizing](#competing-prizing)
  - [Currently Eligible](#currently-eligible)
  - [Planning to be Eligible](#planning-to-be-eligible)
    - [Priority 1](#priority-1)
    - [Priority 2](#priority-2)
    - [Priority 3](#priority-3)

## Overview

### Tools

- Firebase (Prototyping)
- Node.js (Backend Services)
- AWS (Alternative to Firebase)
  - Internet of Things (Messaging protocol with Raspberry Pi)
  - S3 (Later)

[Back to Top](#table-of-contents)

### Front-End

#### Website

##### Tree Structure of Website

Here is a general overview on the structure of the site.

```json
Home page
	- Dispenser Device Web UI
	- Pharma Search
	- Symptom Search
	* Nice to Have *
	- About 
	- Contact
	- Login
		- Device Pairing or Registration
		- Past Symptoms
		- Bookmarked pharmacy and medicince pair
```

[Back to Top](#table-of-contents)

##### Core Components of the Website

###### Pharma Search

- Uses Google Maps to find pharmacies in the local area that provide the medicine requested.
- Showcase the most affordable options. (Nice to have)

###### Symptom Search

- Uses Algolia to search our database for medicine that will help relieve symptoms a user is suffering from in order of relevance.

###### Dispenser Device Web UI

- Users can pair their online account with the Raspberry Pi device that emulates the basic functions of the medicine dispenser by indicating different states via light sensors.

[Back to Top](#table-of-contents)

### Back End

#### API

###### Algolia

- Queries database for medicine that relieves symptoms.

###### Google Maps

- Show locations of pharmacies and general stores where medicine may be purchased to relieve symptoms.

[Back to Top](#table-of-contents)

### Hardware

#### Dispenser Device

- ##### (Prototype)

  - Emulate a dispenser programmatically using light sensors to show a pill has been dispersed or a slot is empty
  - 5 slots for different types of medicine made available which are not specific to a brand or a quantity.
  - Dispenser will administer one pill at a time from a specific bin based on user input.
  - Dispenser keeps track of the quantity of pills in each slot.

[Back to Top](#table-of-contents)

## Competing Prizing

### Currently Eligible

- Hardware
- Website Application
- Documentation
- Algolia Search API
- Best Use of AWS

[Back to Top](#table-of-contents)

### Planning to be Eligible

#### Priority 1

- Best tech domain name
- Best domain name registered with Domain.com

#### Priority 2

- Optum most creative health hack (Get more information)

#### Priority 3

- Best IOT hack using a qualcomm device (We can dream)

- Considered best designed algorithm by Kensho

[Back to Top](#table-of-contents)