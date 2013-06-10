/*
Robert Warren
Term 1304
Advanced Scalable Data Infrastructures (ASD)
Quality Experiences

Github: https://github.com/grindnmosh/Warren_Robert_ASD_1306.git
URL: http://grind-design.com (page for new app coming soon... will be moving 1st app to a sub domain...)
*/

var sampleQa = {
	"1": {
		"name": ["Agent Name: ", "Mike"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU Sale"],
		"qaType": ["QA Style: ", "Coached Calibrated Call"],
		"score": ["Score: ", "75"],
		"pip": ["PIP: ", "N/A"],
		"notes": ["Notes: ", " "]
	},
	"2": {
		"name": ["Agent Name: ", "Chris"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "iPad Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "80"],
		"pip": ["PIP: ", "N/A"],
		"notes": ["Notes: ", " "]
	},
	"3": {
		"name": ["Agent Name: ", "Ceri"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU No Sale"],
		"qaType": ["QA Style: ", "Coached Calibrated Call"],
		"score": ["Score: ", "90"],
		"pip": ["PIP: ", "N/A"],
		"notes": ["Notes: ", " "]
	},
	"4": {
		"name": ["Agent Name: ", "Audra"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU Sale"],
		"qaType": ["QA Style: ", "Listened(WAVE) Coached Later"],
		"score": ["Score: ", "100"],
		"pip": ["PIP: ", "N/A"],
		"notes": ["Notes: ", "Great Call"]
	},
	"5": {
		"name": ["Agent Name: ", "John"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "iPad No Sale"],
		"qaType": ["QA Style: ", "Negative Survey"],
		"score": ["Score: ", "82"],
		"pip": ["PIP: ", "PIP WW"],
		"notes": ["Notes: ", "Good Effort"]
	},
	"6": {
		"name": ["Agent Name: ", "Brittney"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Accessory/Software Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "95"],
		"pip": ["PIP: ", "N/A"],
		"notes": ["Notes: ", " "]
	},
	"7": {
		"name": ["Agent Name: ", "Tabia"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Other Sale"],
		"qaType": ["QA Style: ", "Negative Survey"],
		"score": ["Score: ", "65"],
		"pip": ["PIP: ", "PIP FW"],
		"notes": ["Notes: ", "You need to focus on helping your customers"]
	},
	"8": {
		"name": ["Agent Name: ", "Eric"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Other No Sale"],
		"qaType": ["QA Style: ", "Other"],
		"score": ["Score: ", "92"],
		"pip": ["PIP: ", "N/A"],
		"notes": ["Notes: ", " "]
	},
	"9": {
		"name": ["Agent Name: ", "Danielle"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Accessory/Software No Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "62"],
		"pip": ["PIP: ", "PIP FW"],
		"notes": ["Notes: ", "No Effort"]
	},
	"10": {
		"name": ["Agent Name: ", "Erik"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU Sale"],
		"qaType": ["QA Style: ", "Negative Survey"],
		"score": ["Score: ", "70"],
		"pip": ["PIP: ", "PIP FW"],
		"notes": ["Notes: ", "believe inability"]
	},
	"11": {
		"name": ["Agent Name: ", "Tanya"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Accessory/Software Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "98"],
		"pip": ["PIP: ", "N/A"],
		"notes": ["Notes: ", "so close"]
	},
	"12": {
		"name": ["Agent Name: ", "Derrik"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU No Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "55"],
		"pip": ["PIP: ", "PIP WW"],
		"notes": ["Notes: ", "struggling with discovery, rapport and asking for the sale"]
	},
	"13": {
		"name": ["Agent Name: ", "Paul"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "iPad Sale"],
		"qaType": ["QA Style: ", "Listened With Agent(WAVE)"],
		"score": ["Score: ", "100"],
		"pip": ["PIP: ", "PIP Maintain"],
		"notes": ["Notes: ", "Great Call"]
	},
	"14": {
		"name": ["Agent Name: ", "Donna"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Other Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "75"],
		"pip": ["PIP: ", "PIP Maintain"],
		"notes": ["Notes: ", "Better follow up, courtesy and politeness, rapport"]
	},
	"15": {
		"name": ["Agent Name: ", "Andrea"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU Sale"],
		"qaType": ["QA Style: ", "Listened(WAVE) Coached Later"],
		"score": ["Score: ", "90"],
		"pip": ["PIP: ", "PIP Maintain"],
		"notes": ["Notes: ", "Make sure you are providing contact info and full next steps"]
	},
	"16": {
		"name": ["Agent Name: ", "Nicole"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Accessory/Software No Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "92"],
		"pip": ["PIP: ", "PIP Maintain"],
		"notes": ["Notes: ", "Great improvements"]
	},
	"17": {
		"name": ["Agent Name: ", "Alisha"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU NoSale"],
		"qaType": ["QA Style: ", "Listened With Agent(WAVE)"],
		"score": ["Score: ", "95"],
		"pip": ["PIP: ", "PIP Maintain"],
		"notes": ["Notes: ", "Customer was irate, agent did great job deescalating"]
	},
	"18": {
		"name": ["Agent Name: ", "Robley"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "iPad No Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "80"],
		"pip": ["PIP: ", "N/A"],
		"notes": ["Notes: ", " "]
	},
	"19": {
		"name": ["Agent Name: ", "Joshua"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "CPU No Sale"],
		"qaType": ["QA Style: ", "Listened With Agent(WAVE)"],
		"score": ["Score: ", "60"],
		"pip": ["PIP: ", "N/A"],
		"notes": ["Notes: ", " "]
	},
	"20": {
		"name": ["Agent Name: ", "Ashley"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Accessory/Software Sale"],
		"qaType": ["QA Style: ", "Side By Side"],
		"score": ["Score: ", "95"],
		"pip": ["PIP: ", "N/A"],
		"notes": ["Notes: ", " "]
	},
	"21": {
		"name": ["Agent Name: ", "Harold"],
		"call": ["Date: ", "2013-06-08"],
		"sale": ["Sales Call Type: ", "Other Sale"],
		"qaType": ["QA Style: ", "Listened(WAVE) Coached Later"],
		"score": ["Score: ", "62"],
		"pip": ["PIP: ", "N/A"],
		"notes": ["Notes: ", " "]
	}
};	
	