function detectCreditCardType(cardNumber) {
    // Remove any non-digit characters from the card number
    cardNumber = cardNumber.replace(/[^0-9]/g, '');

    // Check the card number length and prefix to determine the type
    if (cardNumber.length === 16) {
        if (/^(51|52|53|54|55|2221|2222|2223|2224|2225|2226|2227|2228|2229|223|224|225|226|227|228|229|23|24|25|26|27|2720|520|521|522|523|524|525|526|527|528|529)/.test(cardNumber)) {
            return 'MasterCard';
        } else if (/^(4|4026|4045|4053|4073|410|411|412|413|414|415|416|417|418|420|421|422|423|424|425|426|427|428|429|430|431|432|433|434|435|436|437|438|439|44|45|46|47|48|49)/.test(cardNumber)) {
            return 'Visa';
        } else if (/^(300|301|302|303|304|305|309|36|38|390|391|392|393|394|395|96|98|99)/.test(cardNumber)) {
            return 'Diners Club';
        } else if (/^(6011|64|65|622126|622127|622128|622129|62213|62214|62215|62216|62217|62218|62219|6222|6223|6224|6225|6226|6227|6228|6229|623|624|625|626|627|628|629|62|644|645|646|647|648|649)/.test(cardNumber)) {
            return 'Discover';
        } else if (/^(2131|1800|3528|3529|353|354|355|356|357|358|359)/.test(cardNumber)) {
            return 'JCB';
        } else if (/^8699/.test(cardNumber)) {
            return 'Voyager';
        } else if (/^(6371|6376|6378|6380|6382|6384|6386|6388)/.test(cardNumber)) {
            return 'HiperCard';
        } else if (/^(5066|5071|5081|5091|5151|5161|5171|5181)/.test(cardNumber)) {
            return 'Aura';
        }
    } else if (cardNumber.length === 15) {
        if (/^(34|37|3737|3787|3797)/.test(cardNumber)) {
            return 'American Express';
        } else if (/^(2014|2149|1800)/.test(cardNumber)) {
            return 'enRoute';
        }
    } else if (cardNumber.length === 13) {
        if (/^(4)/.test(cardNumber)) {
            return 'Visa';
        }
    }

    // If the card type is not detected, return 'Unknown'
    return 'Unknown';
}
