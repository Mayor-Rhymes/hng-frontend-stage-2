### HNG FRONTEND TASK STAGE TWO

This project was created in fulfillment of the frontend stage two task requirements for HNG 10.

Url: https://hng-frontend-stage-2.vercel.app/
##### Technologies Used?

- [Next.js](https://nextjs.org)
- [Tailwindcss](https://tailwindcss.com)
- [tmdb](https://www.themoviedb.org/)


#### How to Setup?

First, clone the project by copying the following command

`git clone https://github.com/Mayor-Rhymes/hng-frontend-stage-2`

Please make sure you have git installed before running this command

After cloning the project from github, copy the following

`npm install`

This command will install all the dependencies required for this project.

After successful installation, please go to the tmdb website to get your own api url and token. After this is done, you can create a `.env.local` file, which will contain your environment variables

```env

   
NEXT_PUBLIC_API_TOKEN = token
NEXT_PUBLIC_API_URL = Url

```


The token and Url should be replace with your own tmdb url and token. 

Once this is done, you can copy the following command

`npm run dev`

The above command will finally run the project on your local machine.





