(function() {
    /**
     * # molya API Uploader
     * @param { { type: 'byBase64' | 'byUrl', data: { image: string, title?: string, description?: string, useOriginal?: boolean } } } options
     */
    function upload (options) {
        const response = JSON.parse(org.jsoup.Jsoup.connect('https://api.molya.kr/v1/image/' + options.type)
            .header('x-api-key', '응 없어~')
            .header('content-type', 'application/json')
            .requestBody(JSON.stringify(options.data))
            .ignoreContentType(true)
            .ignoreHttpErrors(true)
            .method(org.jsoup.Connection.Method.POST)
            .execute()
            .parse()
            .body()
            .text());
        return response
    }

    module.exports = upload;
})();