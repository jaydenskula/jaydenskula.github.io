const currencyList = {
    USD: "United States Dollar",
    AED: "UAE Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ANG: "Netherlands Antillian Guilder",
    AOA: "Angolan Kwanza",
    ARS: "Argentine Peso",
    AUD: "Australian Dollar",
    AWG: "Aruban Florin",
    AZN: "Azerbaijani Manat",
    BAM: "Bosnia and Herzegovina Mark",
    BBD: "Barbados Dollar",
    BDT: "Bangladeshi Taka",
    BGN: "Bulgarian Lev",
    BHD: "Bahraini Dinar",
    BIF: "Burundian Franc",
    BMD: "Bermudian Dollar",
    BND: "Brunei Dollar",
    BOB: "Bolivian Boliviano",
    BRL: "Brazilian Real",
    BSD: "Bahamian Dollar",
    BTN: "Bhutanese Ngultrum",
    BWP: "Botswana Pula",
    BYN: "Belarusian Ruble",
    BZD: "Belize Dollar",
    CAD: "Canadian Dollar",
    CDF: "Congolese Franc",
    CHF: "Swiss Franc",
    CLP: "Chilean Peso",
    CNY: "Chinese Renminbi",
    COP: "Colombian Peso",
    CRC: "Costa Rica Colon",
    CUP: "Cuban Peso",
    CVE: "Cape Verdean Escudo",
    CZK: "Czech Koruna",
    DJF: "Djiboutian Franc",
    DKK: "Danish Krone",
    DOP: "Dominican Peso",
    DZD: "Algerian Dinar",
    EGP: "Egyptian Pound",
    ERN: "Eritrean Nakfa",
    ETB: "Euthiopian Birr",
    EUR: "Euro",
    FJD: "Fiji Dollar",
    FKP: "Falkland Islands Pound",
    FOK: "Faroese Króna",
    GBP: "Pound Sterling",
    GEL: "Georgian Lari",
    GGP: "Guernsey Pound",
    GHS: "Ghanaian Cedi",
    GIP: "Gibraltar Pound",
    GMD: "Gambian Dalasi",
    GNF: "Guinean Franc",
    GTQ: "Guatemalan Quetzal",
    GYD: "Guyanese Dollar",
    HKD: "Hong Kong Dollar",
    HNL: "Hondurian Lempira",
    HRK: "Croatian Kuna",
    HTG: "Haitian Gourde",
    HUF: "Hungarian Forint",
    IDR: "",
    ILS: "",
    IMP: "",
    INR: "",
    IQD: "",
    IRR: "",
    ISK: "",
    JEP: "",
    JMD: "",
    JOD: "",
    JPY: "",
    KES: "",
    KGS: "",
    KHR: "",
    KID: "",
    KMF: "",
    KRW: "",
    KWD: "",
    KYD: "",
    KZT: "",
    LAK: "",
    LBP: "",
    LKR: "",
    LRD: "",
    LSL: "",
    LYD: "",
    MAD: "",
    MDL: "",
    MGA: "",
    MKD: "",
    MMK: "",
    MNT: "",
    MOP: "",
    MRU: "",
    MUR: "",
    MVR: "", 
    MWK: "",
    MXN: "",
    MYR: "",
    MZN: "",
    NAD: "",
    NGN: "",
    NIO: "",
    NOK: "",
    NPR: "",
    NZD: "",
    OMR: "",
    PAB: "",
    PEN: "",
    PGK: "",
    PHP: "",
    PKR: "",
    PLN: "",
    PYG: "",
    QAR: "",
    RON: "",
    RSD: "",
    RUB: "",
    RWF: "",
    SAR: "",
    SBD: "",
    SCR: "",
    SDG: "",
    SEK: "",
    SGD: "",
    SHP: "",
    SLE: "",
    SOS: "",
    SRD: "",
    SSP: "",
    STN: "",
    SYP: "",
    SZL: "",
    THB: "",
    TJS: "",
    TMT: "",
    TND: "",
    TOP: "",
    TRY: "",
    TTD: "",
    TVD: "",
    TWD: "",
    TZS: "",
    UAH: "",
    UGX: "",
    UYU: "",
    UZS: "",
    VES: "",
    VND: "",
    VUV: "",
    WST: "",
    XAF: "",
    XCD: "",
    XDR: "",
    XOR: "",
    XPF: "",
    YER: "",
    ZAR: "",
    ZMW: "",
    ZWL: "",
}

const primaryCurrency = document.getElementById("primary");
const secondaryCurrency = document.getElementById("secondary");
primaryCurrency.innerHTML = getOptions(currencies);
secondaryCurrency.innerHTML = getOptions(currencies);

function getOptions(data) {
  return Object.entries(data)
    .map(([country, currency]) => `<option value="${country}">${country} | ${currency}</option>`)
    .join("");
}

document.getElementById("btn-convert").addEventListener("click", fetchCurrencies);
function fetchCurrencies() {
  const primary = primaryCurrency.value;
  const secondary = secondaryCurrency.value;
  const amount = document.getElementById("amount").value;
  fetch("https://v6.exchangerate-api.com/v6/a2f267405bf3b15c57b4c205/latest/" + primary)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      console.log(data);
      displayCurrency(data, primary, secondary, amount);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

function displayCurrency(data, primary, secondary, amount) {
  const calculated = amount * data.conversion_rates[secondary];
  document.getElementById("result").setAttribute("style", "display:block");
  document.getElementById("txt-primary").innerText = amount + " " + primary + " = ";
  document.getElementById("txt-secondary").innerText = calculated + " " + secondary;
}