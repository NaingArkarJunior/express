const express = require("express");
const app = express();


app.get("/",(request,response)=>{
    response.send("Hello World")
})


app.get("/countries",(request,response)=>{
    response.send({
        AFN: 'Afghanistan',
        ALL: 'Albania',
        DZD: 'Algeria',
        USD: 'Virgin Islands, U.S.',
        EUR: 'Spain',
        AOA: 'Angola',
        XCD: 'Saint Vincent and the Grenadines',
        ARS: 'Argentina',
        AMD: 'Armenia',
        AWG: 'Aruba',
        AUD: 'Tuvalu',
        AZN: 'Azerbaijan',
        BSD: 'Bahamas',
        BHD: 'Bahrain',
        BDT: 'Bangladesh',
        BBD: 'Barbados',
        BYR: 'Belarus',
        BZD: 'Belize',
        XOF: 'Togo',
        BMD: 'Bermuda',
        BTN: 'Bhutan',
        BOB: 'Bolivia',
        BAM: 'Bosnia and Herzegovina',
        BWP: 'Botswana',
        NOK: 'Svalbard and Jan Mayen',
        BRL: 'Brazil',
        BND: 'Brunei',
        BGN: 'Bulgaria',
        BIF: 'Burundi',
        KHR: 'Cambodia',
        XAF: 'Gabon',
        CAD: 'Canada',
        CVE: 'Cape Verde',
        KYD: 'Cayman Islands',
        CLP: 'Chile',
        CNY: 'China',
        COP: 'Colombia',
        KMF: 'Comoros',
        NZD: 'Tokelau',
        CRC: 'Costa Rica',
        HRK: 'Croatia',
        CUP: 'Cuba',
        CZK: 'Czech Republic',
        DKK: 'Greenland',
        DJF: 'Djibouti',
        DOP: 'Dominican Republic',
        ECS: 'Ecuador',
        EGP: 'Egypt',
        SVC: 'El Salvador',
        GBP: 'Wales',
        ERN: 'Eritrea',
        ETB: 'Ethiopia',
        FKP: 'Falkland Islands',
        FJD: 'Fiji Islands',
        XPF: 'Wallis and Futuna',
        GMD: 'Gambia',
        GEL: 'Georgia',
        GHS: 'Ghana',
        GIP: 'Gibraltar',
        QTQ: 'Guatemala',
        GNF: 'Guinea',
        CFA: 'Guinea-Bissau',
        GYD: 'Guyana',
        HTG: 'Haiti',
        HNL: 'Honduras',
        HKD: 'Hong Kong',
        HUF: 'Hungary',
        ISK: 'Iceland',
        INR: 'India',
        IDR: 'Indonesia',
        IRR: 'Iran',
        IQD: 'Iraq',
        ILS: 'Israel',
        JMD: 'Jamaica',
        JPY: 'Japan',
        JOD: 'Jordan',
        KZT: 'Kazakhstan',
        KES: 'Kenya',
        KWD: 'Kuwait',
        KGS: 'Kyrgyzstan',
        LAK: 'Laos',
        LVL: 'Latvia',
        LBP: 'Lebanon',
        LSL: 'Lesotho',
        LRD: 'Liberia',
        LYD: 'Libyan Arab Jamahiriya',
        CHF: 'Switzerland',
        LTL: 'Lithuania',
        MOP: 'Macau',
        MKD: 'North Macedonia',
        MGF: 'Madagascar',
        MWK: 'Malawi',
        MYR: 'Malaysia',
        MVR: 'Maldives',
        MRO: 'Mauritania',
        MUR: 'Mauritius',
        MXN: 'Mexico',
        MDL: 'Moldova',
        MNT: 'Mongolia',
        MAD: 'Western Sahara',
        MZN: 'Mozambique',
        MMR: 'Myanmar',
        NAD: 'Namibia',
        NPR: 'Nepal',
        ANG: 'Netherlands Antilles',
        NIO: 'Nicaragua',
        NGN: 'Nigeria',
        KPW: 'North Korea',
        OMR: 'Oman',
        PKR: 'Pakistan',
        null: 'Palestine',
        PAB: 'Panama',
        PGK: 'Papua New Guinea',
        PYG: 'Paraguay',
        PEN: 'Peru',
        PHP: 'Philippines',
        PLN: 'Poland',
        QAR: 'Qatar',
        RON: 'Romania',
        RUB: 'Russian Federation',
        RWF: 'Rwanda',
        SHP: 'Saint Helena',
        WST: 'Samoa',
        STD: 'Sao Tome and Principe',
        SAR: 'Saudi Arabia',
        RSD: 'Serbia',
        SCR: 'Seychelles',
        SLL: 'Sierra Leone',
        SGD: 'Singapore',
        SBD: 'Solomon Islands',
        SOS: 'Somalia',
        ZAR: 'South Africa',
        KRW: 'South Korea',
        SSP: 'South Sudan',
        LKR: 'Sri Lanka',
        SDG: 'Sudan',
        SRD: 'Suriname',
        SZL: 'Swaziland',
        SEK: 'Sweden',
        SYP: 'Syria',
        TJS: 'Tajikistan',
        TZS: 'Tanzania',
        THB: 'Thailand',
        CDF: 'The Democratic Republic of Congo',
        TOP: 'Tonga',
        TTD: 'Trinidad and Tobago',
        TND: 'Tunisia',
        TRY: 'Turkey',
        TMT: 'Turkmenistan',
        UGX: 'Uganda',
        UAH: 'Ukraine',
        AED: 'United Arab Emirates',
        UYU: 'Uruguay',
        UZS: 'Uzbekistan',
        VUV: 'Vanuatu',
        VEF: 'Venezuela',
        VND: 'Vietnam',
        YER: 'Yemen',
        ZMW: 'Zambia',
        ZWD: 'Zimbabwe'
    })
})



app.get("*",(request,response)=>{
    response.send("Error 404 file not found")
})

app.listen(3000,()=>{
    console.log("Server Started!")
})