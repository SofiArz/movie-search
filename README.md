
# Movie searcher
### Search the web to find which streaming site offers the movie you are looking for

![home](https://github.com/SofiArz/movie-search/assets/30539335/4e5520df-1e97-45c0-8eac-e901b5d8411c)

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- The frontend components are from [Bulma](https://bulma.io/). Their website also inspired me to implement the orbit animation on the home page!
- To optimize the images I used the site [ShortPixel](https://shortpixel.com/online-image-compression).
- API used to fetch the movies information [MovieOfTheNight](https://www.movieofthenight.com/). You can make up to 100 free requests per day.
---

## To run this project:

1. Make sure you have Node.js installed. 
2. Run **npm i** inside the project directory.
3. Get your API key following [MovieOfTheNight authorization guide](https://docs.movieofthenight.com/guide/authorization).
4. Create an **.env** file with the following variables:
    - **REACT_APP_STREAMING_API_KEY=theKeyYouGotOnStep3**
    - **REACT_APP_API_URL=https://streaming-availability.p.rapidapi.com**
5. Run **npm start**.
6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## About the api Movie of the night
## Services Supported
| Service Id | Service Name |	Supported Countries |
| ---------- | ------------ |  ------------- |
| netflix |	Netflix |	57 Countries |
| prime |	Amazon Prime Video |	56 Countries |
| disney | Disney+ |	38 Countries |
| hbo |	HBO Max |	24 Countries |
| hulu |	Hulu |	United States |
| peacock |	Peacock |	United States |
| paramount |	Paramount+ |	18 Countries |
| starz |	Starz |	United States |
| showtime |	Showtime |	United States |
| apple |	Apple TV+ |	52 Countries |
| mubi | Mubi |	55 Countries |
| stan |	Stan |	Australia |
| now |	Now |	United Kingdom, Ireland, Italy |
| crave |	Crave |	Canada |
| all4 |	All 4 |	United Kingdom, Ireland |
| iplayer |	BBC iPlayer |	United Kingdom |
| britbox |	BritBox |	United Kingdom, United States, Canada, Australia, South Africa |
| hotstar |	Hotstar |	India, Canada, United Kingdom, Indonesia, Singapore|
|zee5 |	Zee5 |	58 Countries |
| curiosity |	Curiosity Stream |	57 Countries |
| wow |	Wow |	Germany |

## Countries Supported

| Country Code |	Country Name |
| ------------ |  ------------- |
| ae |	United Emirates |
| ar |	Argentina |
| at |	Austria |
| au |	Australia |
| az |	Azerbaijan |
| be |	Belgium |
| bg |	Bulgaria |
| br |	Brazil |
| ca |	Canada |
| ch |	Switzerland |
| cl |	Chile |
| co |	Colombia |
| cy |	Cyprus |
| cz |	Czech Republic |
| de |	Germany |
| dk |	Denmark |
| ec |	Ecuador |
| ee |	Estonia |
| es |	Spain |
| fi |	Finland |
| fr |	France |
| gb |	United Kingdom |
| gr |	Greece |
| hk |	Hong Kong |
| hr |	Croatia |
| hu |	Hungary |
| id |	Indonesia | 
| ie |	Ireland |
| il |	Israel |
| in |	India |
| is |	Iceland |
| it |	Italy |
| jp |	Japan |
| kr |	South Korea |
| lt |	Lithuania |
| md |	Moldova |
| mk |	North Macedonia |
| mx |	Mexico |
| my |	Malaysia |
| nl |	Netherlands |
| no |	Norway |
| nz |	New Zealand |
| pa |	Panama |
| pe |	Peru |
| ph |	Philippines |
| pl |	Poland |
| pt |	Portugal |
| ro |	Romania |
| rs |	Serbia |
| ru |	Russia |
| se |	Sweden |
| sg |	Singapore |
| th |	Thailand |
| tr |	Turkey |
| ua |	Ukraine |
| us |	United States |
| vn |	Vietnam |
| za |	South Africa |

* For this project, I only search movies on United States streaming platforms.

### Deployment

The site was deployed on Cloudfare. It is easy to integrate with Github, and it is free!
 <br>
[Link to the site](http://movie-search-9d4.pages.dev)
