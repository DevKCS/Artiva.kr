(function() {
    const uploader = require('./molyaUpload');
    const Bitmap = android.graphics.Bitmap;
    const Canvas = android.graphics.Canvas;

    /**
     * # merge image
     * @param { string[] } urls
     * @returns { string }
     *
     * @example
     * Merge([
     *  'https://example.com/1.png',
     *  'https://example.com/2.png',
     *  'https://example.com/3.png',
     *  'https://example.com/4.png'
     *  ]);
     */
    function Merge (urls) {
        Log.d('merge request')
        if (urls === null || urls.length !== 4) {
            throw new Error('url must be provided');
        }

        const images = getImageByUrls(urls);

        let width = images[0].getWidth() + images[1].getWidth();
        let height = images[0].getHeight() + images[2].getHeight();

        const bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
        const canvas = new Canvas(bitmap);

        canvas.drawColor(0);

        // Draw images in a 2x2 grid
        canvas.drawBitmap(images[0], 0, 0, null);
        canvas.drawBitmap(images[1], images[0].getWidth(), 0, null);
        canvas.drawBitmap(images[2], 0, images[0].getHeight(), null);
        canvas.drawBitmap(images[3], images[2].getWidth(), images[1].getHeight(), null);
        Log.d('before req molya')
        return uploader({
            type: "byBase64",
            data: {
                image: bitmapToBase64(bitmap),
                useOriginal: true
            }
        });
    }

    /**
     * bitmap to base64
     * @param { android.graphics.Bitmap } bitmap
     */
    function bitmapToBase64(bitmap) {
        if (bitmap === null) {
            throw new Error('bitmap cannot be empty');
        }

        let ByteArrayOutputStream = new java.io.ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, ByteArrayOutputStream);
        return android.util.Base64.encodeToString(ByteArrayOutputStream.toByteArray(), android.util.Base64.DEFAULT);
    }

    /**
     * convert url to bitmap
     * @param { string[] } urls
     * @returns { android.graphics.Bitmap[] }
     */
    function getImageByUrls(urls) {
        if (urls === null || urls.length === 0) {
            throw new Error('urls cannot be empty');
        }

        const result = [];

        for (let url of urls) {
            let conn = new java.net.URL(url).openConnection();
            conn.setDoInput(true);
            conn.setConnectTimeout(3000);
            conn.setReadTimeout(5000);
            result.push(android.graphics.BitmapFactory.decodeStream(conn.getInputStream()));
            conn.disconnect();
        }
        return result;
    }

    module.exports = Merge;
})()
