# NOTES

## Expo image picker (`expo-image-picker`)

`npx expo install expo-image-picker`

The `pickImageAsync()` function invokes `ImagePicker.launchImageLibraryAsync()`
and then handles the result. The `launchImageLibraryAsync()` method returns an
object containing information about the selected image.

Here is an example of the result object and the properties it contains:


iOS
```javascript
{
    "assets": [
        {
            "assetId": "99D53A1F-FEEF-40E1-8BB3-7DD55A43C8B7/L0/001",
            "base64": null,
            "duration": null,
            "exif": null,
            "fileName": "IMG_0004.JPG",
            "fileSize": 2548364,
            "height": 1669,
            "mimeType": "image/jpeg",
            "type": "image",
            "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FStickerSmash-13f21121-fc9d-4ec6-bf89-bf7d6165eb69/ImagePicker/ea574eaa-f332-44a7-85b7-99704c22b402.jpeg",
            "width": 1668
        }
    ],
    "canceled": false
}
```

Android
```javascript
{
  "assets": [
    {
      "assetId": null,
      "base64": null,
      "duration": null,
      "exif": null,
      "fileName": "ea574eaa-f332-44a7-85b7-99704c22b402.jpeg",
      "fileSize": 4513577,
      "height": 4570,
      "mimeType": "image/jpeg",
      "rotation": null,
      "type": "image",
      "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FStickerSmash-13f21121-fc9d-4ec6-bf89-bf7d6165eb69/ImagePicker/ea574eaa-f332-44a7-85b7-99704c22b402.jpeg",
      "width": 2854
    }
  ],
  "canceled": false
}
```

Web
```Javascript
{
  "assets": [
    {
      "fileName": "some-image.png",
      "height": 720,
      "mimeType": "image/png",
      "uri": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAA"
    }
  ],
  "canceled": false
}
```


