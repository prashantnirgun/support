const usersGroups = [
  { id: 1, user_group_name: 'Administrator', status: 'Active' },
  { id: 2, user_group_name: 'Manager', status: 'Active' },
  { id: 3, user_group_name: 'Staff', status: 'Active' },
  { id: 4, user_group_name: 'Guest', status: 'Active' }
];

const countreis = [
  {
    id: 1,
    currency_code: 'AFG',
    country_name: 'Afghanistan',
    country_code: 'AF',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 2,
    currency_code: 'ALA',
    country_name: 'Åland',
    country_code: 'AX',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 3,
    currency_code: 'ALB',
    country_name: 'Albania',
    country_code: 'AL',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 4,
    currency_code: 'DZA',
    country_name: 'Algeria',
    country_code: 'DZ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 5,
    currency_code: 'ASM',
    country_name: 'American Samoa',
    country_code: 'AS',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 6,
    currency_code: 'AND',
    country_name: 'Andorra',
    country_code: 'AD',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 7,
    currency_code: 'AGO',
    country_name: 'Angola',
    country_code: 'AO',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 8,
    currency_code: 'AIA',
    country_name: 'Anguilla',
    country_code: 'AI',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 9,
    currency_code: 'ATA',
    country_name: 'Antarctica',
    country_code: 'AQ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 10,
    currency_code: 'ATG',
    country_name: 'Antigua and Barbuda',
    country_code: 'AG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 11,
    currency_code: 'ARG',
    country_name: 'Argentina',
    country_code: 'AR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 12,
    currency_code: 'ARM',
    country_name: 'Armenia',
    country_code: 'AM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 13,
    currency_code: 'ABW',
    country_name: 'Aruba',
    country_code: 'AW',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 14,
    currency_code: 'AUS',
    country_name: 'Australia',
    country_code: 'AU',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 15,
    currency_code: 'AUT',
    country_name: 'Austria',
    country_code: 'AT',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 16,
    currency_code: 'AZE',
    country_name: 'Azerbaijan',
    country_code: 'AZ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 17,
    currency_code: 'BHS',
    country_name: 'Bahamas',
    country_code: 'BS',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 18,
    currency_code: 'BHR',
    country_name: 'Bahrain',
    country_code: 'BH',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 19,
    currency_code: 'BGD',
    country_name: 'Bangladesh',
    country_code: 'BD',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 20,
    currency_code: 'BRB',
    country_name: 'Barbados',
    country_code: 'BB',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 21,
    currency_code: 'BLR',
    country_name: 'Belarus',
    country_code: 'BY',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 22,
    currency_code: 'BEL',
    country_name: 'Belgium',
    country_code: 'BE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 23,
    currency_code: 'BLZ',
    country_name: 'Belize',
    country_code: 'BZ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 24,
    currency_code: 'BEN',
    country_name: 'Benin',
    country_code: 'BJ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 25,
    currency_code: 'BMU',
    country_name: 'Bermuda',
    country_code: 'BM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 26,
    currency_code: 'BTN',
    country_name: 'Bhutan',
    country_code: 'BT',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 27,
    currency_code: 'BOL',
    country_name: 'Bolivia',
    country_code: 'BO',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 28,
    currency_code: 'BES',
    country_name: 'Bonaire',
    country_code: 'BQ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 29,
    currency_code: 'BIH',
    country_name: 'Bosnia and Herzegovina',
    country_code: 'BA',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 30,
    currency_code: 'BWA',
    country_name: 'Botswana',
    country_code: 'BW',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 31,
    currency_code: 'BVT',
    country_name: 'Bouvet Island',
    country_code: 'BV',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 32,
    currency_code: 'BRA',
    country_name: 'Brazil',
    country_code: 'BR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 33,
    currency_code: 'IOT',
    country_name: 'British Indian Ocean Territory',
    country_code: 'IO',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 34,
    currency_code: 'VGB',
    country_name: 'British Virgin Islands',
    country_code: 'VG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 35,
    currency_code: 'BRN',
    country_name: 'Brunei',
    country_code: 'BN',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 36,
    currency_code: 'BGR',
    country_name: 'Bulgaria',
    country_code: 'BG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 37,
    currency_code: 'BFA',
    country_name: 'Burkina Faso',
    country_code: 'BF',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 38,
    currency_code: 'BDI',
    country_name: 'Burundi',
    country_code: 'BI',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 39,
    currency_code: 'KHM',
    country_name: 'Cambodia',
    country_code: 'KH',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 40,
    currency_code: 'CMR',
    country_name: 'Cameroon',
    country_code: 'CM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 41,
    currency_code: 'CAN',
    country_name: 'Canada',
    country_code: 'CA',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 42,
    currency_code: 'CPV',
    country_name: 'Cape Verde',
    country_code: 'CV',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 43,
    currency_code: 'CYM',
    country_name: 'Cayman Islands',
    country_code: 'KY',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 44,
    currency_code: 'CAF',
    country_name: 'Central African Republic',
    country_code: 'CF',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 45,
    currency_code: 'TCD',
    country_name: 'Chad',
    country_code: 'TD',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 46,
    currency_code: 'CHL',
    country_name: 'Chile',
    country_code: 'CL',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 47,
    currency_code: 'CHN',
    country_name: 'China',
    country_code: 'CN',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 48,
    currency_code: 'CXR',
    country_name: 'Christmas Island',
    country_code: 'CX',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 49,
    currency_code: 'CCK',
    country_name: 'Cocos [Keeling] Islands',
    country_code: 'CC',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 50,
    currency_code: 'COL',
    country_name: 'Colombia',
    country_code: 'CO',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 51,
    currency_code: 'COM',
    country_name: 'Comoros',
    country_code: 'KM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 52,
    currency_code: 'COK',
    country_name: 'Cook Islands',
    country_code: 'CK',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 53,
    currency_code: 'CRI',
    country_name: 'Costa Rica',
    country_code: 'CR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 54,
    currency_code: 'HRV',
    country_name: 'Croatia',
    country_code: 'HR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 55,
    currency_code: 'CUB',
    country_name: 'Cuba',
    country_code: 'CU',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 56,
    currency_code: 'CUW',
    country_name: 'Curacao',
    country_code: 'CW',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 57,
    currency_code: 'CYP',
    country_name: 'Cyprus',
    country_code: 'CY',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 58,
    currency_code: 'CZE',
    country_name: 'Czech Republic',
    country_code: 'CZ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 59,
    currency_code: 'COD',
    country_name: 'Democratic Republic of the Congo',
    country_code: 'CD',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 60,
    currency_code: 'DNK',
    country_name: 'Denmark',
    country_code: 'DK',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 61,
    currency_code: 'DJI',
    country_name: 'Djibouti',
    country_code: 'DJ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 62,
    currency_code: 'DMA',
    country_name: 'Dominica',
    country_code: 'DM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 63,
    currency_code: 'DOM',
    country_name: 'Dominican Republic',
    country_code: 'DO',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 64,
    currency_code: 'TLS',
    country_name: 'East Timor',
    country_code: 'TL',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 65,
    currency_code: 'ECU',
    country_name: 'Ecuador',
    country_code: 'EC',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 66,
    currency_code: 'EGY',
    country_name: 'Egypt',
    country_code: 'EG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 67,
    currency_code: 'SLV',
    country_name: 'El Salvador',
    country_code: 'SV',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 68,
    currency_code: 'GNQ',
    country_name: 'Equatorial Guinea',
    country_code: 'GQ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 69,
    currency_code: 'ERI',
    country_name: 'Eritrea',
    country_code: 'ER',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 70,
    currency_code: 'EST',
    country_name: 'Estonia',
    country_code: 'EE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 71,
    currency_code: 'ETH',
    country_name: 'Ethiopia',
    country_code: 'ET',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 72,
    currency_code: 'FLK',
    country_name: 'Falkland Islands',
    country_code: 'FK',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 73,
    currency_code: 'FRO',
    country_name: 'Faroe Islands',
    country_code: 'FO',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 74,
    currency_code: 'FJI',
    country_name: 'Fiji',
    country_code: 'FJ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 75,
    currency_code: 'FIN',
    country_name: 'Finland',
    country_code: 'FI',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 76,
    currency_code: 'FRA',
    country_name: 'France',
    country_code: 'FR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 77,
    currency_code: 'GUF',
    country_name: 'French Guiana',
    country_code: 'GF',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 78,
    currency_code: 'PYF',
    country_name: 'French Polynesia',
    country_code: 'PF',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 79,
    currency_code: 'ATF',
    country_name: 'French Southern Territories',
    country_code: 'TF',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 80,
    currency_code: 'GAB',
    country_name: 'Gabon',
    country_code: 'GA',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 81,
    currency_code: 'GMB',
    country_name: 'Gambia',
    country_code: 'GM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 82,
    currency_code: 'GEO',
    country_name: 'Georgia',
    country_code: 'GE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 83,
    currency_code: 'DEU',
    country_name: 'Germany',
    country_code: 'DE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 84,
    currency_code: 'GHA',
    country_name: 'Ghana',
    country_code: 'GH',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 85,
    currency_code: 'GIB',
    country_name: 'Gibraltar',
    country_code: 'GI',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 86,
    currency_code: 'GRC',
    country_name: 'Greece',
    country_code: 'GR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 87,
    currency_code: 'GRL',
    country_name: 'Greenland',
    country_code: 'GL',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 88,
    currency_code: 'GRD',
    country_name: 'Grenada',
    country_code: 'GD',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 89,
    currency_code: 'GLP',
    country_name: 'Guadeloupe',
    country_code: 'GP',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 90,
    currency_code: 'GUM',
    country_name: 'Guam',
    country_code: 'GU',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 91,
    currency_code: 'GTM',
    country_name: 'Guatemala',
    country_code: 'GT',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 92,
    currency_code: 'GGY',
    country_name: 'Guernsey',
    country_code: 'GG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 93,
    currency_code: 'GIN',
    country_name: 'Guinea',
    country_code: 'GN',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 94,
    currency_code: 'GNB',
    country_name: 'Guinea-Bissau',
    country_code: 'GW',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 95,
    currency_code: 'GUY',
    country_name: 'Guyana',
    country_code: 'GY',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 96,
    currency_code: 'HTI',
    country_name: 'Haiti',
    country_code: 'HT',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 97,
    currency_code: 'HMD',
    country_name: 'Heard Island and McDonald Islands',
    country_code: 'HM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 98,
    currency_code: 'HND',
    country_name: 'Honduras',
    country_code: 'HN',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 99,
    currency_code: 'HKG',
    country_name: 'Hong Kong',
    country_code: 'HK',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 100,
    currency_code: 'HUN',
    country_name: 'Hungary',
    country_code: 'HU',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 101,
    currency_code: 'ISL',
    country_name: 'Iceland',
    country_code: 'IS',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 102,
    currency_code: 'IND',
    country_name: 'India',
    country_code: 'IN',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 103,
    currency_code: 'IDN',
    country_name: 'Indonesia',
    country_code: 'ID',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 104,
    currency_code: 'IRN',
    country_name: 'Iran',
    country_code: 'IR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 105,
    currency_code: 'IRQ',
    country_name: 'Iraq',
    country_code: 'IQ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 106,
    currency_code: 'IRL',
    country_name: 'Ireland',
    country_code: 'IE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 107,
    currency_code: 'IMN',
    country_name: 'Isle of Man',
    country_code: 'IM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 108,
    currency_code: 'ISR',
    country_name: 'Israel',
    country_code: 'IL',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 109,
    currency_code: 'ITA',
    country_name: 'Italy',
    country_code: 'IT',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 110,
    currency_code: 'CIV',
    country_name: 'Ivory Coast',
    country_code: 'CI',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 111,
    currency_code: 'JAM',
    country_name: 'Jamaica',
    country_code: 'JM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 112,
    currency_code: 'JPN',
    country_name: 'Japan',
    country_code: 'JP',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 113,
    currency_code: 'JEY',
    country_name: 'Jersey',
    country_code: 'JE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 114,
    currency_code: 'JOR',
    country_name: 'Jordan',
    country_code: 'JO',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 115,
    currency_code: 'KAZ',
    country_name: 'Kazakhstan',
    country_code: 'KZ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 116,
    currency_code: 'KEN',
    country_name: 'Kenya',
    country_code: 'KE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 117,
    currency_code: 'KIR',
    country_name: 'Kiribati',
    country_code: 'KI',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 118,
    currency_code: 'XKX',
    country_name: 'Kosovo',
    country_code: 'XK',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 119,
    currency_code: 'KWT',
    country_name: 'Kuwait',
    country_code: 'KW',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 120,
    currency_code: 'KGZ',
    country_name: 'Kyrgyzstan',
    country_code: 'KG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 121,
    currency_code: 'LAO',
    country_name: 'Laos',
    country_code: 'LA',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 122,
    currency_code: 'LVA',
    country_name: 'Latvia',
    country_code: 'LV',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 123,
    currency_code: 'LBN',
    country_name: 'Lebanon',
    country_code: 'LB',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 124,
    currency_code: 'LSO',
    country_name: 'Lesotho',
    country_code: 'LS',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 125,
    currency_code: 'LBR',
    country_name: 'Liberia',
    country_code: 'LR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 126,
    currency_code: 'LBY',
    country_name: 'Libya',
    country_code: 'LY',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 127,
    currency_code: 'LIE',
    country_name: 'Liechtenstein',
    country_code: 'LI',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 128,
    currency_code: 'LTU',
    country_name: 'Lithuania',
    country_code: 'LT',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 129,
    currency_code: 'LUX',
    country_name: 'Luxembourg',
    country_code: 'LU',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 130,
    currency_code: 'MAC',
    country_name: 'Macao',
    country_code: 'MO',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 131,
    currency_code: 'MKD',
    country_name: 'Macedonia',
    country_code: 'MK',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 132,
    currency_code: 'MDG',
    country_name: 'Madagascar',
    country_code: 'MG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 133,
    currency_code: 'MWI',
    country_name: 'Malawi',
    country_code: 'MW',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 134,
    currency_code: 'MYS',
    country_name: 'Malaysia',
    country_code: 'MY',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 135,
    currency_code: 'MDV',
    country_name: 'Maldives',
    country_code: 'MV',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 136,
    currency_code: 'MLI',
    country_name: 'Mali',
    country_code: 'ML',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 137,
    currency_code: 'MLT',
    country_name: 'Malta',
    country_code: 'MT',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 138,
    currency_code: 'MHL',
    country_name: 'Marshall Islands',
    country_code: 'MH',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 139,
    currency_code: 'MTQ',
    country_name: 'Martinique',
    country_code: 'MQ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 140,
    currency_code: 'MRT',
    country_name: 'Mauritania',
    country_code: 'MR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 141,
    currency_code: 'MUS',
    country_name: 'Mauritius',
    country_code: 'MU',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 142,
    currency_code: 'MYT',
    country_name: 'Mayotte',
    country_code: 'YT',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 143,
    currency_code: 'MEX',
    country_name: 'Mexico',
    country_code: 'MX',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 144,
    currency_code: 'FSM',
    country_name: 'Micronesia',
    country_code: 'FM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 145,
    currency_code: 'MDA',
    country_name: 'Moldova',
    country_code: 'MD',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 146,
    currency_code: 'MCO',
    country_name: 'Monaco',
    country_code: 'MC',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 147,
    currency_code: 'MNG',
    country_name: 'Mongolia',
    country_code: 'MN',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 148,
    currency_code: 'MNE',
    country_name: 'Montenegro',
    country_code: 'ME',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 149,
    currency_code: 'MSR',
    country_name: 'Montserrat',
    country_code: 'MS',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 150,
    currency_code: 'MAR',
    country_name: 'Morocco',
    country_code: 'MA',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 151,
    currency_code: 'MOZ',
    country_name: 'Mozambique',
    country_code: 'MZ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 152,
    currency_code: 'MMR',
    country_name: 'Myanmar [Burma]',
    country_code: 'MM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 153,
    currency_code: 'NAM',
    country_name: 'Namibia',
    country_code: 'NA',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 154,
    currency_code: 'NRU',
    country_name: 'Nauru',
    country_code: 'NR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 155,
    currency_code: 'NPL',
    country_name: 'Nepal',
    country_code: 'NP',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 156,
    currency_code: 'NLD',
    country_name: 'Netherlands',
    country_code: 'NL',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 157,
    currency_code: 'NCL',
    country_name: 'New Caledonia',
    country_code: 'NC',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 158,
    currency_code: 'NZL',
    country_name: 'New Zealand',
    country_code: 'NZ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 159,
    currency_code: 'NIC',
    country_name: 'Nicaragua',
    country_code: 'NI',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 160,
    currency_code: 'NER',
    country_name: 'Niger',
    country_code: 'NE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 161,
    currency_code: 'NGA',
    country_name: 'Nigeria',
    country_code: 'NG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 162,
    currency_code: 'NIU',
    country_name: 'Niue',
    country_code: 'NU',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 163,
    currency_code: 'NFK',
    country_name: 'Norfolk Island',
    country_code: 'NF',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 164,
    currency_code: 'PRK',
    country_name: 'North Korea',
    country_code: 'KP',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 165,
    currency_code: 'MNP',
    country_name: 'Northern Mariana Islands',
    country_code: 'MP',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 166,
    currency_code: 'NOR',
    country_name: 'Norway',
    country_code: 'NO',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 167,
    currency_code: 'OMN',
    country_name: 'Oman',
    country_code: 'OM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 168,
    currency_code: 'PAK',
    country_name: 'Pakistan',
    country_code: 'PK',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 169,
    currency_code: 'PLW',
    country_name: 'Palau',
    country_code: 'PW',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 170,
    currency_code: 'PSE',
    country_name: 'Palestine',
    country_code: 'PS',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 171,
    currency_code: 'PAN',
    country_name: 'Panama',
    country_code: 'PA',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 172,
    currency_code: 'PNG',
    country_name: 'Papua New Guinea',
    country_code: 'PG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 173,
    currency_code: 'PRY',
    country_name: 'Paraguay',
    country_code: 'PY',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 174,
    currency_code: 'PER',
    country_name: 'Peru',
    country_code: 'PE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 175,
    currency_code: 'PHL',
    country_name: 'Philippines',
    country_code: 'PH',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 176,
    currency_code: 'PCN',
    country_name: 'Pitcairn Islands',
    country_code: 'PN',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 177,
    currency_code: 'POL',
    country_name: 'Poland',
    country_code: 'PL',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 178,
    currency_code: 'PRT',
    country_name: 'Portugal',
    country_code: 'PT',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 179,
    currency_code: 'PRI',
    country_name: 'Puerto Rico',
    country_code: 'PR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 180,
    currency_code: 'QAT',
    country_name: 'Qatar',
    country_code: 'QA',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 181,
    currency_code: 'COG',
    country_name: 'Republic of the Congo',
    country_code: 'CG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 182,
    currency_code: 'REU',
    country_name: 'Réunion',
    country_code: 'RE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 183,
    currency_code: 'ROU',
    country_name: 'Romania',
    country_code: 'RO',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 184,
    currency_code: 'RUS',
    country_name: 'Russia',
    country_code: 'RU',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 185,
    currency_code: 'RWA',
    country_name: 'Rwanda',
    country_code: 'RW',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 186,
    currency_code: 'BLM',
    country_name: 'Saint Barthélemy',
    country_code: 'BL',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 187,
    currency_code: 'SHN',
    country_name: 'Saint Helena',
    country_code: 'SH',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 188,
    currency_code: 'KNA',
    country_name: 'Saint Kitts and Nevis',
    country_code: 'KN',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 189,
    currency_code: 'LCA',
    country_name: 'Saint Lucia',
    country_code: 'LC',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 190,
    currency_code: 'MAF',
    country_name: 'Saint Martin',
    country_code: 'MF',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 191,
    currency_code: 'SPM',
    country_name: 'Saint Pierre and Miquelon',
    country_code: 'PM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 192,
    currency_code: 'VCT',
    country_name: 'Saint Vincent and the Grenadines',
    country_code: 'VC',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 193,
    currency_code: 'WSM',
    country_name: 'Samoa',
    country_code: 'WS',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 194,
    currency_code: 'SMR',
    country_name: 'San Marino',
    country_code: 'SM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 195,
    currency_code: 'STP',
    country_name: 'São Tomé and Príncipe',
    country_code: 'ST',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 196,
    currency_code: 'SAU',
    country_name: 'Saudi Arabia',
    country_code: 'SA',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 197,
    currency_code: 'SEN',
    country_name: 'Senegal',
    country_code: 'SN',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 198,
    currency_code: 'SRB',
    country_name: 'Serbia',
    country_code: 'RS',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 199,
    currency_code: 'SYC',
    country_name: 'Seychelles',
    country_code: 'SC',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 200,
    currency_code: 'SLE',
    country_name: 'Sierra Leone',
    country_code: 'SL',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 201,
    currency_code: 'SGP',
    country_name: 'Singapore',
    country_code: 'SG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 202,
    currency_code: 'SXM',
    country_name: 'Sint Maarten',
    country_code: 'SX',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 203,
    currency_code: 'SVK',
    country_name: 'Slovakia',
    country_code: 'SK',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 204,
    currency_code: 'SVN',
    country_name: 'Slovenia',
    country_code: 'SI',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 205,
    currency_code: 'SLB',
    country_name: 'Solomon Islands',
    country_code: 'SB',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 206,
    currency_code: 'SOM',
    country_name: 'Somalia',
    country_code: 'SO',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 207,
    currency_code: 'ZAF',
    country_name: 'South Africa',
    country_code: 'ZA',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 208,
    currency_code: 'SGS',
    country_name: 'South Georgia and the South Sandwich Islands',
    country_code: 'GS',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 209,
    currency_code: 'KOR',
    country_name: 'South Korea',
    country_code: 'KR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 210,
    currency_code: 'SSD',
    country_name: 'South Sudan',
    country_code: 'SS',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 211,
    currency_code: 'ESP',
    country_name: 'Spain',
    country_code: 'ES',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 212,
    currency_code: 'LKA',
    country_name: 'Sri Lanka',
    country_code: 'LK',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 213,
    currency_code: 'SDN',
    country_name: 'Sudan',
    country_code: 'SD',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 214,
    currency_code: 'SUR',
    country_name: 'Suriname',
    country_code: 'SR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 215,
    currency_code: 'SJM',
    country_name: 'Svalbard and Jan Mayen',
    country_code: 'SJ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 216,
    currency_code: 'SWZ',
    country_name: 'Swaziland',
    country_code: 'SZ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 217,
    currency_code: 'SWE',
    country_name: 'Sweden',
    country_code: 'SE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 218,
    currency_code: 'CHE',
    country_name: 'Switzerland',
    country_code: 'CH',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 219,
    currency_code: 'SYR',
    country_name: 'Syria',
    country_code: 'SY',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 220,
    currency_code: 'TWN',
    country_name: 'Taiwan',
    country_code: 'TW',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 221,
    currency_code: 'TJK',
    country_name: 'Tajikistan',
    country_code: 'TJ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 222,
    currency_code: 'TZA',
    country_name: 'Tanzania',
    country_code: 'TZ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 223,
    currency_code: 'THA',
    country_name: 'Thailand',
    country_code: 'TH',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 224,
    currency_code: 'TGO',
    country_name: 'Togo',
    country_code: 'TG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 225,
    currency_code: 'TKL',
    country_name: 'Tokelau',
    country_code: 'TK',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 226,
    currency_code: 'TON',
    country_name: 'Tonga',
    country_code: 'TO',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 227,
    currency_code: 'TTO',
    country_name: 'Trinidad and Tobago',
    country_code: 'TT',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 228,
    currency_code: 'TUN',
    country_name: 'Tunisia',
    country_code: 'TN',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 229,
    currency_code: 'TUR',
    country_name: 'Turkey',
    country_code: 'TR',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 230,
    currency_code: 'TKM',
    country_name: 'Turkmenistan',
    country_code: 'TM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 231,
    currency_code: 'TCA',
    country_name: 'Turks and Caicos Islands',
    country_code: 'TC',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 232,
    currency_code: 'TUV',
    country_name: 'Tuvalu',
    country_code: 'TV',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 233,
    currency_code: 'UMI',
    country_name: 'U.S. Minor Outlying Islands',
    country_code: 'UM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 234,
    currency_code: 'VIR',
    country_name: 'U.S. Virgin Islands',
    country_code: 'VI',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 235,
    currency_code: 'UGA',
    country_name: 'Uganda',
    country_code: 'UG',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 236,
    currency_code: 'UKR',
    country_name: 'Ukraine',
    country_code: 'UA',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 237,
    currency_code: 'ARE',
    country_name: 'United Arab Emirates',
    country_code: 'AE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 238,
    currency_code: 'GBR',
    country_name: 'United Kingdom',
    country_code: 'GB',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 239,
    currency_code: 'USA',
    country_name: 'United States',
    country_code: 'US',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 240,
    currency_code: 'URY',
    country_name: 'Uruguay',
    country_code: 'UY',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 241,
    currency_code: 'UZB',
    country_name: 'Uzbekistan',
    country_code: 'UZ',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 242,
    currency_code: 'VUT',
    country_name: 'Vanuatu',
    country_code: 'VU',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 243,
    currency_code: 'VAT',
    country_name: 'Vatican City',
    country_code: 'VA',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 244,
    currency_code: 'VEN',
    country_name: 'Venezuela',
    country_code: 'VE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 245,
    currency_code: 'VNM',
    country_name: 'Vietnam',
    country_code: 'VN',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 246,
    currency_code: 'WLF',
    country_name: 'Wallis and Futuna',
    country_code: 'WF',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 247,
    currency_code: 'ESH',
    country_name: 'Western Sahara',
    country_code: 'EH',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 248,
    currency_code: 'YEM',
    country_name: 'Yemen',
    country_code: 'YE',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 249,
    currency_code: 'ZMB',
    country_name: 'Zambia',
    country_code: 'ZM',
    currency_symbol: null,
    payment_support: 'No'
  },
  {
    id: 250,
    currency_code: 'ZWE',
    country_name: 'Zimbabwe',
    country_code: 'ZW',
    currency_symbol: null,
    payment_support: 'No'
  }
];

const states = [
  {
    id: 1,
    state_name: 'Andaman and Nicobar Islands',
    gst_state_code: 35,
    country_id: 102
  },
  { id: 2, state_name: 'Andhra Pradesh', gst_state_code: 28, country_id: 102 },
  {
    id: 3,
    state_name: 'Arunachal Pradesh',
    gst_state_code: 12,
    country_id: 102
  },
  { id: 4, state_name: 'Assam', gst_state_code: 18, country_id: 102 },
  { id: 5, state_name: 'Bihar', gst_state_code: 10, country_id: 102 },
  { id: 6, state_name: 'Chandigarh', gst_state_code: 4, country_id: 102 },
  { id: 7, state_name: 'Chhattisgarh', gst_state_code: 22, country_id: 102 },
  {
    id: 8,
    state_name: 'Dadra and Nagar Haveli',
    gst_state_code: 26,
    country_id: 102
  },
  { id: 9, state_name: 'Daman and Diu', gst_state_code: 25, country_id: 102 },
  { id: 10, state_name: 'Delhi-NCR', gst_state_code: 7, country_id: 102 },
  { id: 11, state_name: 'Goa', gst_state_code: 30, country_id: 102 },
  { id: 12, state_name: 'Gujarat', gst_state_code: 24, country_id: 102 },
  { id: 13, state_name: 'Haryana', gst_state_code: 6, country_id: 102 },
  {
    id: 14,
    state_name: 'Himachal Pradesh',
    gst_state_code: 2,
    country_id: 102
  },
  {
    id: 15,
    state_name: 'Jammu and Kashmir',
    gst_state_code: 1,
    country_id: 102
  },
  { id: 16, state_name: 'Jharkhand', gst_state_code: 20, country_id: 102 },
  { id: 17, state_name: 'Karnataka', gst_state_code: 29, country_id: 102 },
  { id: 18, state_name: 'Kerala', gst_state_code: 32, country_id: 102 },
  { id: 19, state_name: 'Lakshadweep', gst_state_code: 31, country_id: 102 },
  { id: 20, state_name: 'Madhya Pradesh', gst_state_code: 23, country_id: 102 },
  { id: 21, state_name: 'Maharashtra', gst_state_code: 27, country_id: 102 },
  { id: 22, state_name: 'Manipur', gst_state_code: 14, country_id: 102 },
  { id: 23, state_name: 'Meghalaya', gst_state_code: 17, country_id: 102 },
  { id: 24, state_name: 'Mizoram', gst_state_code: 15, country_id: 102 },
  { id: 25, state_name: 'Nagaland', gst_state_code: 13, country_id: 102 },
  { id: 26, state_name: 'Orissa', gst_state_code: 21, country_id: 102 },
  { id: 27, state_name: 'Pondicherry', gst_state_code: 34, country_id: 102 },
  { id: 28, state_name: 'Punjab', gst_state_code: 3, country_id: 102 },
  { id: 29, state_name: 'Rajasthan', gst_state_code: 8, country_id: 102 },
  { id: 30, state_name: 'Sikkim', gst_state_code: 11, country_id: 102 },
  { id: 31, state_name: 'Tamil Nadu', gst_state_code: 33, country_id: 102 },
  { id: 32, state_name: 'Telangana', gst_state_code: 36, country_id: 102 },
  { id: 33, state_name: 'Tripura', gst_state_code: 16, country_id: 102 },
  {
    id: 34,
    state_name: 'Andrapradesh (New)',
    gst_state_code: 37,
    country_id: 102
  },
  { id: 35, state_name: 'Uttar Pradesh', gst_state_code: 9, country_id: 102 },
  { id: 36, state_name: 'Uttarakhand', gst_state_code: 5, country_id: 102 },
  { id: 37, state_name: 'West Bengal', gst_state_code: 19, country_id: 102 }
];

exports.up = async function (knex) {
  for (var i = 0; i < usersGroups.length; i++) {
    const exists = await knex('users_groups').where('id', usersGroups[i].id);
    if (exists.length === 0) {
      await knex('users_groups').insert(usersGroups[i]);
    }
  }

  for (var k = 0; k < countreis.length; k++) {
    const exists = await knex('countries').where('id', countreis[k].id);
    if (exists.length === 0) {
      await knex('countries').insert(countreis[k]);
    }
  }

  for (var j = 0; j < states.length; j++) {
    const exists = await knex('states').where('id', states[j].id);
    if (exists.length === 0) {
      await knex('states').insert(states[j]);
    }
  }
};

exports.down = async function (knex) {};
