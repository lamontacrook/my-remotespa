# Getting Started with AEM Remote SPA

1. Run `npm install -g create-react-app` to install create-react-app.

2. Run `npx create-react-app my-remotespa` to create your new app and change the directory to your new app `cd my-my-remotespa`.

3. If you don't have a github account create one and then create new repository. ![Image of creating repository](/public/create-repository.png)

4. Push the new app code to your new repository.  
    git init
    git add .
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/[your username]/my-remotespa.git
    git push -u origin main

You may be prompted for a personal access token.  You can choose to login with your browser to authenticate.

5. Now we will install the Github pages library `npm install gh-pages --save-dev`.

6. Open the package.json file and add the following changes:

   "homepage": "http://[your username].github.io/my-remotespa"

   "scripts": {
        //...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }

    After, my package.json looks like this:
    ![package.json](/public/package.png)

7. Now if you navigate to http://[you username].github.io/my-remotespa you will see a basic REACT page.

![REACT](/public/react-homepage.png)
