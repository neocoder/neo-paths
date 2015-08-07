var paths = require('../lib/paths.js');
var assert = require('assert');

var ISODate = function(s) {
	return new Date(s);
};

var o1 = {
	"_id" : 56,
	"_isNew" : false,
	"account_email" : "support@somehost.com",
	"active" : false,
	"bounced" : 20,
	"dropReducedGeo" : false,
	"dropReducedRecipients" : false,
	"groupName" : "G-Lock Analytics",
	"mergeTag" : "%%Encoded_Email_Analytics%%",
	"name" : "v4 release is due on February 21...",
	"recipients" : 300,
	"redirectScript" : "http://undefined/",
	"reducedGeoCollection" : "geo_56",
	"reducedGeoCollectionCount" : 20,
	"reducedRecipientsCollection" : "recipients_56",
	"reducedRecipientsCollectionCount" : 88,
	"reducedRecipientsLastUpdated" : ISODate("2011-02-16T13:16:18.487Z"),
	"startDate" : ISODate("2011-02-15T13:34:42.682Z"),
	"stats" : {
		"ecu" : {
			"Apple Mail" : {
				"total" : 1
			},
			"GMail" : {
				"detailed" : {
					"in Firefox" : 7,
					"in Google Chrome" : 3,
					"in Internet Explorer" : 2,
					"in Safari" : 1
				},
				"total" : 13
			},
			"Hotmail" : {
				"detailed" : {
					"in Firefox" : 1,
					"in Internet Explorer" : 3
				},
				"total" : 4
			},
			"Lotus Notes" : {
				"detailed" : {
					"Lotus Notes 6" : {
						"0" : 9
					}
				},
				"total" : 9
			},
			"Microsoft Outlook" : {
				"detailed" : {
					"Outlook 2003" : 405,
					"Windows Live Mail" : 84
				},
				"total" : 489
			},
			"Thunderbird" : {
				"total" : 3
			},
			"Unknown email client" : {
				"total" : 4
			},
			"Web-based Email client" : {
				"detailed" : {
					"in Firefox" : 2,
					"in Google Chrome" : 2,
					"in Safari" : 19
				},
				"total" : 23
			},
			"Yahoo mail" : {
				"detailed" : {
					"in Internet Explorer" : 3,
					"in Safari" : 1
				},
				"total" : 4
			}
		},
		"forwarded" : 3,
		"opens" : 550,
		"readTime" : {
			"glanced" : 9,
			"read" : 44,
			"skim" : 12
		},
		"timelineStats" : {
			"tm2011" : {
				"opens" : 547,
				"uniqueOpens" : 65,
				"year" : true
			},
			"tm2011_02" : {
				"month" : true,
				"opens" : 474,
				"uniqueOpens" : 59
			},
			"tm2011_02_15" : {
				"date" : true,
				"opens" : 217,
				"uniqueOpens" : 53
			},
			"tm2011_02_15_13" : {
				"hour" : true,
				"opens" : 37,
				"uniqueOpens" : 15
			},
			"tm2011_02_15_14" : {
				"hour" : true,
				"opens" : 66,
				"uniqueOpens" : 14
			},
			"tm2011_02_15_15" : {
				"hour" : true,
				"opens" : 41,
				"uniqueOpens" : 9
			},
			"tm2011_02_15_16" : {
				"hour" : true,
				"opens" : 9,
				"uniqueOpens" : 4
			},
			"tm2011_02_15_17" : {
				"hour" : true,
				"opens" : 18,
				"uniqueOpens" : 3
			},
			"tm2011_02_15_18" : {
				"hour" : true,
				"opens" : 6,
				"uniqueOpens" : 1
			},
			"tm2011_02_15_19" : {
				"hour" : true,
				"opens" : 12,
				"uniqueOpens" : 2
			},
			"tm2011_02_15_20" : {
				"hour" : true,
				"opens" : 10,
				"uniqueOpens" : 1
			},
			"tm2011_02_15_21" : {
				"hour" : true,
				"opens" : 9,
				"uniqueOpens" : 1
			},
			"tm2011_02_15_22" : {
				"hour" : true,
				"opens" : 8,
				"uniqueOpens" : 3
			},
			"tm2011_02_15_23" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_16" : {
				"date" : true,
				"opens" : 59,
				"uniqueOpens" : 5
			},
			"tm2011_02_16_00" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_02_16_01" : {
				"hour" : true,
				"opens" : 2,
				"uniqueOpens" : 1
			},
			"tm2011_02_16_08" : {
				"hour" : true,
				"opens" : 7,
				"uniqueOpens" : 2
			},
			"tm2011_02_16_09" : {
				"hour" : true,
				"opens" : 17
			},
			"tm2011_02_16_10" : {
				"hour" : true,
				"opens" : 7
			},
			"tm2011_02_16_11" : {
				"hour" : true,
				"opens" : 5
			},
			"tm2011_02_16_12" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_16_13" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_02_16_14" : {
				"hour" : true,
				"opens" : 12
			},
			"tm2011_02_16_15" : {
				"hour" : true,
				"opens" : 3
			},
			"tm2011_02_16_17" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_16_21" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_17" : {
				"date" : true,
				"opens" : 42
			},
			"tm2011_02_17_00" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_17_09" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_17_10" : {
				"hour" : true,
				"opens" : 5
			},
			"tm2011_02_17_13" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_17_14" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_17_15" : {
				"hour" : true,
				"opens" : 20
			},
			"tm2011_02_17_16" : {
				"hour" : true,
				"opens" : 9
			},
			"tm2011_02_17_19" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18" : {
				"date" : true,
				"opens" : 26
			},
			"tm2011_02_18_05" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18_07" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18_09" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18_10" : {
				"hour" : true,
				"opens" : 5
			},
			"tm2011_02_18_11" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18_14" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_18_15" : {
				"hour" : true,
				"opens" : 5
			},
			"tm2011_02_18_16" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18_19" : {
				"hour" : true,
				"opens" : 7
			},
			"tm2011_02_18_20" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_19" : {
				"date" : true,
				"opens" : 15
			},
			"tm2011_02_19_11" : {
				"hour" : true,
				"opens" : 5
			},
			"tm2011_02_19_13" : {
				"hour" : true,
				"opens" : 7
			},
			"tm2011_02_19_14" : {
				"hour" : true,
				"opens" : 3
			},
			"tm2011_02_21" : {
				"date" : true,
				"opens" : 17
			},
			"tm2011_02_21_03" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_21_07" : {
				"hour" : true,
				"opens" : 3
			},
			"tm2011_02_21_08" : {
				"hour" : true,
				"opens" : 3
			},
			"tm2011_02_21_10" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_21_12" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_21_15" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_21_17" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_21_23" : {
				"hour" : true,
				"opens" : 3
			},
			"tm2011_02_22" : {
				"date" : true,
				"opens" : 31,
				"uniqueOpens" : 1
			},
			"tm2011_02_22_11" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_22_14" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_22_15" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_22_16" : {
				"hour" : true,
				"opens" : 4
			},
			"tm2011_02_22_17" : {
				"hour" : true,
				"opens" : 7,
				"uniqueOpens" : 1
			},
			"tm2011_02_22_20" : {
				"hour" : true,
				"opens" : 4
			},
			"tm2011_02_22_21" : {
				"hour" : true,
				"opens" : 12
			},
			"tm2011_02_22_22" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_23" : {
				"date" : true,
				"opens" : 20
			},
			"tm2011_02_23_03" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_23_08" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_23_11" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_23_14" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_23_20" : {
				"hour" : true,
				"opens" : 14
			},
			"tm2011_02_23_22" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_24" : {
				"date" : true,
				"opens" : 8
			},
			"tm2011_02_24_09" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_24_15" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_24_16" : {
				"hour" : true,
				"opens" : 4
			},
			"tm2011_02_24_17" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_25" : {
				"date" : true,
				"opens" : 24
			},
			"tm2011_02_25_04" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_25_08" : {
				"hour" : true,
				"opens" : 5
			},
			"tm2011_02_25_09" : {
				"hour" : true,
				"opens" : 11
			},
			"tm2011_02_25_10" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_25_14" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_25_19" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_25_20" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_25_21" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_27" : {
				"date" : true,
				"opens" : 8
			},
			"tm2011_02_27_20" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_27_21" : {
				"hour" : true,
				"opens" : 6
			},
			"tm2011_02_28" : {
				"date" : true,
				"opens" : 7
			},
			"tm2011_02_28_07" : {
				"hour" : true,
				"opens" : 4
			},
			"tm2011_02_28_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_28_16" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_28_20" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03" : {
				"month" : true,
				"opens" : 56,
				"uniqueOpens" : 4
			},
			"tm2011_03_01" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_01_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_02" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_02_20" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_03" : {
				"date" : true,
				"opens" : 3
			},
			"tm2011_03_03_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_03_19" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_03_22" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_04" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_04_15" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_07" : {
				"date" : true,
				"opens" : 2
			},
			"tm2011_03_07_12" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_07_17" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_08" : {
				"date" : true,
				"opens" : 2
			},
			"tm2011_03_08_12" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_08_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_09" : {
				"date" : true,
				"opens" : 7
			},
			"tm2011_03_09_11" : {
				"hour" : true,
				"opens" : 6
			},
			"tm2011_03_09_21" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_10" : {
				"date" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_03_10_05" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_03_11" : {
				"date" : true,
				"opens" : 26,
				"uniqueOpens" : 1
			},
			"tm2011_03_11_02" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_03_11_08" : {
				"hour" : true,
				"opens" : 12
			},
			"tm2011_03_11_11" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_03_11_15" : {
				"hour" : true,
				"opens" : 7
			},
			"tm2011_03_11_16" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_03_11_17" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_03_12" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_12_01" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_14" : {
				"date" : true,
				"opens" : 3
			},
			"tm2011_03_14_08" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_14_14" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_03_15" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_15_12" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_16" : {
				"date" : true,
				"opens" : 2,
				"uniqueOpens" : 1
			},
			"tm2011_03_16_10" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_16_16" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_03_17" : {
				"date" : true,
				"opens" : 2,
				"uniqueOpens" : 1
			},
			"tm2011_03_17_09" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_17_20" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_03_18" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_18_08" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_19" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_19_05" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_30" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_30_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_04" : {
				"month" : true,
				"opens" : 4,
				"uniqueOpens" : 1
			},
			"tm2011_04_01" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_04_01_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_04_04" : {
				"date" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_04_04_18" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_04_07" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_04_07_12" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_04_11" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_04_11_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_05" : {
				"month" : true,
				"opens" : 3
			},
			"tm2011_05_02" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_05_02_11" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_05_08" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_05_08_10" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_05_22" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_05_22_20" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_06" : {
				"month" : true,
				"opens" : 2
			},
			"tm2011_06_12" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_06_12_21" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_06_23" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_06_23_15" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_07" : {
				"month" : true,
				"opens" : 2
			},
			"tm2011_07_27" : {
				"date" : true,
				"opens" : 2
			},
			"tm2011_07_27_02" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_07_27_03" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_08" : {
				"month" : true,
				"opens" : 3
			},
			"tm2011_08_03" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_08_03_14" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_08_30" : {
				"date" : true,
				"opens" : 2
			},
			"tm2011_08_30_15" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_09" : {
				"month" : true,
				"opens" : 1
			},
			"tm2011_09_09" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_09_09_17" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_10" : {
				"month" : true,
				"opens" : 1
			},
			"tm2011_10_27" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_10_27_00" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_11" : {
				"month" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_11_24" : {
				"date" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_11_24_09" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2012" : {
				"opens" : 3,
				"year" : true
			},
			"tm2012_01" : {
				"month" : true,
				"opens" : 3
			},
			"tm2012_01_12" : {
				"date" : true,
				"opens" : 2
			},
			"tm2012_01_12_14" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2012_01_22" : {
				"date" : true,
				"opens" : 1
			},
			"tm2012_01_22_22" : {
				"hour" : true,
				"opens" : 1
			}
		},
		"uniqueOpens" : 65,
		"unsubscribes" : 2
	},
	"tags" : [
		"G-Lock Analytics"
	],
	"unsubscribeLink" : "http://emltr.com/u/1k/%%Encoded_Email_Analytics%%",
	"useMergeTag" : true,
	"useRedirectScript" : false
};


var o2 = {
	"_id" : 56,
	"_isNew" : false,
	"account_email" : "support@somehost.com",
	"active" : false,
	"bounced" : 20,
	"dropReducedGeo" : false,
	"dropReducedRecipients" : false,
	"groupName" : "G-Lock Analytics",
	"mergeTag" : "%%Encoded_Email_Analytics%%",
	"name" : "v4 release is due on February 21...",
	"recipients" : 300,
	"redirectScript" : "http://undefined/",
	"reducedGeoCollection" : "geo_56",
	"reducedGeoCollectionCount" : 20,
	"reducedRecipientsCollection" : "recipients_56",
	"reducedRecipientsCollectionCount" : 88,
	"reducedRecipientsLastUpdated" : ISODate("2011-02-16T13:16:18.487Z"),
	"startDate" : ISODate("2011-02-15T13:34:42.682Z"),
	"stats" : {
		"ecu" : {
			"Apple Mail" : {
				"total" : 1
			},
			"GMail" : {
				"detailed" : {
					"in Firefox" : 7,
					"in Google Chrome" : 3,
					"in Internet Explorer" : 2,
					"in Safari" : 1
				},
				"total" : 13
			},
			"Hotmail" : {
				"detailed" : {
					"in Firefox" : 1,
					"in Internet Explorer" : 3
				},
				"total" : 4
			},
			"Lotus Notes" : {
				"detailed" : {
					"Lotus Notes 6" : {
						"0" : 9
					}
				},
				"total" : 9
			},
			"Microsoft Outlook" : {
				"detailed" : {
					"Outlook 2003" : 405,
					"Windows Live Mail" : 84
				},
				"total" : 489
			},
			"Thunderbird" : {
				"total" : 3
			},
			"Unknown email client" : {
				"total" : 4
			},
			"Web-based Email client" : {
				"detailed" : {
					"in Firefox" : 2,
					"in Google Chrome" : 2,
					"in Safari" : 19
				},
				"total" : 23
			},
			"Yahoo mail" : {
				"detailed" : {
					"in Internet Explorer" : 3,
					"in Safari" : 1
				},
				"total" : 4
			}
		},
		"forwarded" : 3,
		"opens" : 550,
		"readTime" : {
			"glanced" : 9,
			"read" : 44,
			"skim" : 12
		},
		"timelineStats" : {
			"tm2011" : {
				"opens" : 547,
				"uniqueOpens" : 65,
				"year" : true
			},
			"tm2011_02" : {
				"month" : true,
				"opens" : 474,
				"uniqueOpens" : 59
			},
			"tm2011_02_15" : {
				"date" : true,
				"opens" : 217,
				"uniqueOpens" : 53
			},
			"tm2011_02_15_13" : {
				"hour" : true,
				"opens" : 37,
				"uniqueOpens" : 15
			},
			"tm2011_02_15_14" : {
				"hour" : true,
				"opens" : 66,
				"uniqueOpens" : 14
			},
			"tm2011_02_15_15" : {
				"hour" : true,
				"opens" : 41,
				"uniqueOpens" : 9
			},
			"tm2011_02_15_16" : {
				"hour" : true,
				"opens" : 9,
				"uniqueOpens" : 4
			},
			"tm2011_02_15_17" : {
				"hour" : true,
				"opens" : 18,
				"uniqueOpens" : 3
			},
			"tm2011_02_15_18" : {
				"hour" : true,
				"opens" : 6,
				"uniqueOpens" : 1
			},
			"tm2011_02_15_19" : {
				"hour" : true,
				"opens" : 12,
				"uniqueOpens" : 2
			},
			"tm2011_02_15_20" : {
				"hour" : true,
				"opens" : 10,
				"uniqueOpens" : 1
			},
			"tm2011_02_15_21" : {
				"hour" : true,
				"opens" : 9,
				"uniqueOpens" : 1
			},
			"tm2011_02_15_22" : {
				"hour" : true,
				"opens" : 8,
				"uniqueOpens" : 3
			},
			"tm2011_02_15_23" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_16" : {
				"date" : true,
				"opens" : 59,
				"uniqueOpens" : 5
			},
			"tm2011_02_16_00" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_02_16_01" : {
				"hour" : true,
				"opens" : 2,
				"uniqueOpens" : 1
			},
			"tm2011_02_16_08" : {
				"hour" : true,
				"opens" : 7,
				"uniqueOpens" : 2
			},
			"tm2011_02_16_09" : {
				"hour" : true,
				"opens" : 17
			},
			"tm2011_02_16_10" : {
				"hour" : true,
				"opens" : 7
			},
			"tm2011_02_16_11" : {
				"hour" : true,
				"opens" : 5
			},
			"tm2011_02_16_12" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_16_13" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_02_16_14" : {
				"hour" : true,
				"opens" : 12
			},
			"tm2011_02_16_15" : {
				"hour" : true,
				"opens" : 3
			},
			"tm2011_02_16_17" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_16_21" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_17" : {
				"date" : true,
				"opens" : 42
			},
			"tm2011_02_17_00" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_17_09" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_17_10" : {
				"hour" : true,
				"opens" : 5
			},
			"tm2011_02_17_13" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_17_14" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_17_15" : {
				"hour" : true,
				"opens" : 20
			},
			"tm2011_02_17_16" : {
				"hour" : true,
				"opens" : 9
			},
			"tm2011_02_17_19" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18" : {
				"date" : true,
				"opens" : 26
			},
			"tm2011_02_18_05" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18_07" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18_09" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18_10" : {
				"hour" : true,
				"opens" : 5
			},
			"tm2011_02_18_11" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18_14" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_18_15" : {
				"hour" : true,
				"opens" : 5
			},
			"tm2011_02_18_16" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_18_19" : {
				"hour" : true,
				"opens" : 7
			},
			"tm2011_02_18_20" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_19" : {
				"date" : true,
				"opens" : 15
			},
			"tm2011_02_19_11" : {
				"hour" : true,
				"opens" : 5
			},
			"tm2011_02_19_13" : {
				"hour" : true,
				"opens" : 7
			},
			"tm2011_02_19_14" : {
				"hour" : true,
				"opens" : 3
			},
			"tm2011_02_21" : {
				"date" : true,
				"opens" : 17
			},
			"tm2011_02_21_03" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_21_07" : {
				"hour" : true,
				"opens" : 3
			},
			"tm2011_02_21_08" : {
				"hour" : true,
				"opens" : 3
			},
			"tm2011_02_21_10" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_21_12" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_21_15" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_21_17" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_21_23" : {
				"hour" : true,
				"opens" : 3
			},
			"tm2011_02_22" : {
				"date" : true,
				"opens" : 31,
				"uniqueOpens" : 1
			},
			"tm2011_02_22_11" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_22_14" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_22_15" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_22_16" : {
				"hour" : true,
				"opens" : 4
			},
			"tm2011_02_22_17" : {
				"hour" : true,
				"opens" : 7,
				"uniqueOpens" : 1
			},
			"tm2011_02_22_20" : {
				"hour" : true,
				"opens" : 4
			},
			"tm2011_02_22_21" : {
				"hour" : true,
				"opens" : 12
			},
			"tm2011_02_22_22" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_23" : {
				"date" : true,
				"opens" : 20
			},
			"tm2011_02_23_03" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_23_08" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_23_11" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_23_14" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_23_20" : {
				"hour" : true,
				"opens" : 14
			},
			"tm2011_02_23_22" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_24" : {
				"date" : true,
				"opens" : 8
			},
			"tm2011_02_24_09" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_24_15" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_24_16" : {
				"hour" : true,
				"opens" : 4
			},
			"tm2011_02_24_17" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_25" : {
				"date" : true,
				"opens" : 24
			},
			"tm2011_02_25_04" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_25_08" : {
				"hour" : true,
				"opens" : 5
			},
			"tm2011_02_25_09" : {
				"hour" : true,
				"opens" : 11
			},
			"tm2011_02_25_10" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_25_14" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_25_19" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_25_20" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_25_21" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_27" : {
				"date" : true,
				"opens" : 8
			},
			"tm2011_02_27_20" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_02_27_21" : {
				"hour" : true,
				"opens" : 6
			},
			"tm2011_02_28" : {
				"date" : true,
				"opens" : 7
			},
			"tm2011_02_28_07" : {
				"hour" : true,
				"opens" : 4
			},
			"tm2011_02_28_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_28_16" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_02_28_20" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03" : {
				"month" : true,
				"opens" : 56,
				"uniqueOpens" : 4
			},
			"tm2011_03_01" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_01_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_02" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_02_20" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_03" : {
				"date" : true,
				"opens" : 3
			},
			"tm2011_03_03_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_03_19" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_03_22" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_04" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_04_15" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_07" : {
				"date" : true,
				"opens" : 2
			},
			"tm2011_03_07_12" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_07_17" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_08" : {
				"date" : true,
				"opens" : 2
			},
			"tm2011_03_08_12" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_08_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_09" : {
				"date" : true,
				"opens" : 7
			},
			"tm2011_03_09_11" : {
				"hour" : true,
				"opens" : 6
			},
			"tm2011_03_09_21" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_10" : {
				"date" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_03_10_05" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_03_11" : {
				"date" : true,
				"opens" : 26,
				"uniqueOpens" : 1
			},
			"tm2011_03_11_02" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_03_11_08" : {
				"hour" : true,
				"opens" : 12
			},
			"tm2011_03_11_11" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_03_11_15" : {
				"hour" : true,
				"opens" : 7
			},
			"tm2011_03_11_16" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_03_11_17" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_03_12" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_12_01" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_14" : {
				"date" : true,
				"opens" : 3
			},
			"tm2011_03_14_08" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_14_14" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_03_15" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_15_12" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_16" : {
				"date" : true,
				"opens" : 2,
				"uniqueOpens" : 1
			},
			"tm2011_03_16_10" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_16_16" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_03_17" : {
				"date" : true,
				"opens" : 2,
				"uniqueOpens" : 1
			},
			"tm2011_03_17_09" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_17_20" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_03_18" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_18_08" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_19" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_19_05" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_03_30" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_03_30_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_04" : {
				"month" : true,
				"opens" : 4,
				"uniqueOpens" : 1
			},
			"tm2011_04_01" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_04_01_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_04_04" : {
				"date" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_04_04_18" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_04_07" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_04_07_12" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_04_11" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_04_11_13" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_05" : {
				"month" : true,
				"opens" : 3
			},
			"tm2011_05_02" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_05_02_11" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_05_08" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_05_08_10" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_05_22" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_05_22_20" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_06" : {
				"month" : true,
				"opens" : 2
			},
			"tm2011_06_12" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_06_12_21" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_06_23" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_06_23_15" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_07" : {
				"month" : true,
				"opens" : 2
			},
			"tm2011_07_27" : {
				"date" : true,
				"opens" : 2
			},
			"tm2011_07_27_02" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_07_27_03" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_08" : {
				"month" : true,
				"opens" : 3
			},
			"tm2011_08_03" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_08_03_14" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_08_30" : {
				"date" : true,
				"opens" : 2
			},
			"tm2011_08_30_15" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2011_09" : {
				"month" : true,
				"opens" : 1
			},
			"tm2011_09_09" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_09_09_17" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_10" : {
				"month" : true,
				"opens" : 1
			},
			"tm2011_10_27" : {
				"date" : true,
				"opens" : 1
			},
			"tm2011_10_27_00" : {
				"hour" : true,
				"opens" : 1
			},
			"tm2011_11" : {
				"month" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_11_24" : {
				"date" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2011_11_24_09" : {
				"hour" : true,
				"opens" : 1,
				"uniqueOpens" : 1
			},
			"tm2012" : {
				"opens" : 3,
				"year" : true
			},
			"tm2012_01" : {
				"month" : true,
				"opens" : 3
			},
			"tm2012_01_12" : {
				"date" : true,
				"opens" : 2
			},
			"tm2012_01_12_14" : {
				"hour" : true,
				"opens" : 2
			},
			"tm2012_01_22" : {
				"date" : true,
				"opens" : 1
			},
			"tm2012_01_22_22" : {
				"hour" : true,
				"opens" : 1
			}
		},
		"uniqueOpens" : 65,
		"unsubscribes" : 2
	},
	"tags" : [
		"G-Lock Analytics"
	],
	"unsubscribeLink" : "http://emltr.com/u/1k/%%Encoded_Email_Analytics%%",
	"useMergeTag" : true,
	"useRedirectScript" : false
};

assert(paths.objEqual(o1, o2));