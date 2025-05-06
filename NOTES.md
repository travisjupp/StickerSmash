# NOTES


## Viewing the Expo/EAS tutorial (git logs)

View the Expo and EAS tutorial (git logs) in reverse order omitting a few
unnecessary verbose commits:

```sh
git log --patch --reverse --pretty=format:'%C(bold blue)%h%C(reset) %C(bold yellow)%B%C(reset)' --grep='Initial commit' --grep='Install eslint' --grep='Update package files' --grep='tags file' --invert-grep
```

Only view the Expo tutorial:

```sh
git log --patch --reverse --pretty=format:"%C(bold blue)%h%C(reset) %C(bold yellow)%B%C(reset)" --grep='Initial commit' --grep='Install eslint' --grep='Update package files' --grep='tags file' --invert-grep --until 'Thu May 1 11:54:15 2025'
```

Only view the EAS tutorial:

```sh
git log --patch --reverse --pretty=format:'%C(bold blue)%h%C(reset) %C(bold yellow)%B%C(reset)' --grep='tags file' --grep='Update notes' --invert-grep --since 'Thu May 1 11:54:15 2025'
```


## Semantic Versioning

https://semver.org/
Semantic Versioning 2.0.0
Summary
Given a version number MAJOR.MINOR.PATCH, increment the:

1. MAJOR version when you make incompatible API changes
2. MINOR version when you add functionality in a backward compatible manner
3. PATCH version when you make backward compatible bug fixes

Additional labels for pre-release and build metadata are available as
extensions to the MAJOR.MINOR.PATCH format.


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



