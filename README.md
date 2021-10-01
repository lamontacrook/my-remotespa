# Getting Started with AEM Remote SPA

1. Run `npm install -g create-react-app` to install create-react-app.

2. Run `npx create-react-app my-remotespa` to create your new app and change the directory to your new app `cd my-my-remotespa`.

3. If you don't have a github account create one and then create new repository. ![Image of creating repository](/public/create-repository.png)

4. Push the new app code to your new repository.  
    ```
    git init
    git add .
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/[your username]/my-remotespa.git
    git push -u origin main
    ```

You may be prompted for a personal access token.  You can choose to login with your browser to authenticate.

5. Now we will install the Github pages library `npm install gh-pages --save-dev`.

6. Open the package.json file and add the following changes:

   ```
   "homepage": "http://[your username].github.io/my-remotespa"

   "scripts": {
        //...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }
    ```

    After, my package.json looks like this:
    ![package.json](/public/package.png)

7. Now if you navigate to http://[you username].github.io/my-remotespa you will see a basic REACT page.

![REACT](/public/react-homepage.png)

8. Now let's begin building our app.  Let's create 2 environment files in the root of the directory `.env.development` and `.env`. Then create a folder called `/components` under the `/src` folder.  In that folder let's create a file call `Text.js`.

9.  Now let's add content to these files:
    ```
    #.env.development

    REACT_APP_PUBLIC_URI=http://localhost:3000
    ```

    ```
    #env
    #replace my user name for your github username

    REACT_APP_PUBLIC_URI=https://lamontacrook.github.io
    ```

    ```
    //Text.js

    import React from 'react';

    function Text() {
        
        return (
            <div>
                <p>{process.env.REACT_APP_PUBLIC_URI}</p>
                <p>Hello World!</p>
            </div>
        );
    }

    export default Text;
    ```

Finally, let's update our App.js under the `/src` folder.

    ```
    //App.js

    import React from 'react';
    import Text from './components/Text'
    import './App.css';

    function App() {

    return (
        <Text />   
    );
    }

    export default App;
    ```

10. Let's now see if everything works locally.  You can run this on your machine locally by issuing the following command from the root of the directory: `npm start`.  This will run a local server and open a browser to http://localhost:3000/.  You should see the following browser window.

![Hello World](/public/hello-world.png)

If everything works then let's put it on github.  Type the following commands in the terminal.

    ```
    npm run predeploy
    npm run deploy
    ```

You should see the same message at the http://[you username].github.io/my-remotespa.

11. Now let's move to AEM.  Create a directoring under the root call `/aem`.

12. Make sure you have java and maven installed.  You can issue the following commands for the terminal.

    ```
    java -version
    mvn -v
    ```

    ```
    cd ~
    echo $PATH > .bashrc
    code .bashrc
    ```

    ```
    mvn -B archetype:generate \
    -D archetypeGroupId=com.adobe.aem \
    -D archetypeArtifactId=aem-project-archetype \
    -D archetypeVersion=30 \
    -D appTitle="MyRemoteSPA" \
    -D appId="my-remotespa" \
    -D groupId="com.my-remotespa" \
    -D frontendModule="react" \
    -D aemVersion="cloud" \
    -D version="0.0.1-SNAPSHOT" \
    -D enableDynamicMedia="y" \
    -D includeExamples="y" \
    -D sdkVersion="latest"
    ```

    2021.9.5852.20210917T073206Z-210800





