response = unirest.get("https://daxeel-celebinfo-v1.p.mashape.com/date/" + day + "/" + month,
    headers = {
        "X-Mashape-Key": "V96M0xptxxxxxx",
        "Accept": "text/plain"
    }
)
var results = response.data;

for (var i = 0; i < results.length; i++) {


}