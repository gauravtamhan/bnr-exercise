# Exercise Summary

The sample application makes a GET request to load blog post data on application mount. During this time it displays a loading spinner to the user. Once the data loads it populates the page with cards that contain blog post data. These cards display the title, body text, and the userID. The application also keeps track of the 'current user' in state and displays their posts in a column on the left side of the page. Clicking a card updates the 'current user' and also updates the left column with that user's posts. If an error occurs during the fetch call, an error message is shown on screen. The application uses Ant Design for styling the UI. Testing covers the loading, success, and error states as well as unit tests for the Post and AsyncRequestWrapper components.

Moving forward I would add additional features and interactions to the sample app. For instance a 'Read More' button to each of the cards that routes to another page with the full blog post, or actionable buttons that allow you to share a blog post on social media or mark as read/save for later. Additionally, I would enhance the cards with things like a user avatar and additional meta data provided by the API.

## To run sample app

Run npm install, then npm start. For tests run npm test (might have to type 'a' to run all tests).
