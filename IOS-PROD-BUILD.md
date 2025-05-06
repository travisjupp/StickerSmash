# Create a production build for iOS


Learn about the process of creating a production build for iOS and automating
the release process.

In this chapter, we'll create our example app's production version and submit
it for testing using TestFlight. After that, we'll submit them for App Store
review to get it on the App Store.

Watch: Creating and releasing a production build for iOS
https://www.youtube.com/watch?v=VZL_e0cEwo8


## Prerequisites

To publish and distribute an app on the Apple Play Store, we need:

* Apple Developer account: To create one, see Apple Developer Portal.

* Production build profile: Ensure that a production build profile is present
in your eas.json, which is added by default.


## Production build for iOS

A production iOS build is optimized for Apple's App Store Connect, which allows
distributing builds to testers with TestFlight and public end users through the
App Store. This build type cannot be side-loaded on a simulator or device and
can only be distributed through App Store Connect.

### 1. Create a distribution provisioning profile

Run the eas credentials command in the terminal and then answer the following
prompts by EAS CLI:

* Select platform iOS.

* Which build profile do you want to configure? Select production.

* Do you want to log in to your Apple account? Press Y. This will log in to our
Apple Developer account.

* What do you want to do? Select Build credentials and choose All: Set up all
the required credentials to build your project.

* Now, it will prompt whether we want to re-use the previous Distribution
Certificate. Press Y.

* Generate a new Apple Provisioning Profile? Press Y. This will be the
provisioning profile for the production app.

* Once the profiles are created, press any ctrl + c to exit the EAS CLI.

### 2. Create a production build

To create an iOS production build using the default production profile, open
your terminal and execute the following command. Since production is set as the
default profile in the EAS configuration, there is no need to specify it
explicitly with the --profile flag.

        eas build --platform ios

The command will queue the build. Notice on the Expo dashboard that the Build
Number is auto-incremented.

### 3. Submit the app binary to the App Store

To submit the app binary created from our latest EAS Build, run the eas submit
command:

    eas submit --platform ios

After running this command, we need to:

* Select a build from EAS. Let's select the latest build ID.

* Follow the prompt to log in to our Apple account. When it asks for Reuse this
App Store Connect API Key? Press Y.

* This will trigger the submission process.

### 4. Release an internal testing version

After the submission process is complete, we'll need to log in to the Apple
Developer account from the web browser.

* Click Apps, and see the app icon.

* Click the app name, and from the navigation tab menu, click TestFlight. If
the build was just submitted, it may take a few minutes for Apple to process
the build before it is available to distribute with TestFlight.

* Click on the Manage Compliance link. Since our app doesn't use any
encryption, select None of the algorithms mentioned above.

Tip: Next time when creating an app, skip this compliance by adding
ios.config.usesNonExemptEncryption in app config and set it to false if the app
doesn't use any encryption.

* In App Store Connect, under Internal Testing, and create a test group. This
will allow us to invite test users.

( Create a test user group in App Store Connect )

* Once the group is created, an email will be sent to all the test users.

( Email sent to test users for internal testing )

* In the email, click View in TestFlight, accept the invite, and then tap
Install.

( TestFlight app showing the app to install )

After that, the app will download on our device so that we can test it.

Note: Similar to internal testing, we can also create a group for inviting
external testers using TestFlight. Where internal testing has a limit of 100
users, TestFlight allows sharing a test release version externally with up to
10,000 testers and provides a publicly shareable link. For brevity, we are not
going to cover those steps in this tutorial.

### 5. Submit the app to the Apple App Store

To prepare our app for App Store submission, go to the App Store tab:

* Provide metadata details, provide screenshots as per Apple's guidelines and
also fill details under General.

( App Store Connect showing the app details and screenshots )

* Then, manually select the build.

( App Store Connect showing the build selection for the app )

Complete App Store listing: To prepare the app for store listing, see Create
app store assets on how to create screenshots and previews.

* Once our app is ready, click on Submit to App Review. After that, Apple will
review our app, and if approved, the app will be available on the App Store.

( App Store Connect showing the app submission for review )

### 6. Automated submissions

For future releases, we can streamline the process by combining build creation
and App Store submission into a single step by using the --auto-submit flag
with eas build:

        eas build --platform ios --auto-submit


