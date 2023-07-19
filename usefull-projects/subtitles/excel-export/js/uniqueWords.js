const someString = `
I don't know what that dream is that you have.
I don't care how disappointing it might've been as you've been working toward that dream,
but that dream that you're holding in your mind,
That it's possible!
That some of you already know.
That it's hard,
it's not easy.
It's hard changing your life.
That in the process, of working on your dreams,
you are going to incur in a lot of disappointment,
a lot of failure,
a lot of pain.
There are moments when you're gonna doubt yourself.
You said God, why, why is this happening to me?
I'm just trying to take care of my children and my mother, I'm not trying to steal or rob from anybody
How does this have to happen to me?
For those of you that have experience some hardships,
don't give up on your dream.
The rough times are gonna come, but they have not come to stay, they have come to pass.
Greatness, is not this wonderful, esoteric, illusive,
god-like feature that only the special among us will ever taste.
It's something that truly exists, in all of us.
It's very important for you to believe, that you are the one.
Most people, they raise a family, they earn a living and then they died.
They stop growing, they stop working on themselves, they stop stretching, they stop pushing themselves.
Then a lot of people like to complain but they don't wanna do anything about their situation.
And most people don't work on their dreams, why?
One is because of fear, the fear of failure, "what if things don't work out"?
And the fear of success, "what If they do and I can't handle it"?
These are not risk takers.
You spent so much time with other people, you spent some much time trying to get people to like you,
you know other people more than you know yourself,
you studied them, you know about them, you want hang out like them, you want to be just like them.
And you know what?
You've invested so much time on them, you don't know who you are.
I challenge you to spend time by yourself.
It's necessary, that get the losers out of your life, if you want to live your dream.
But people who are running towards their dreams, life have a special kind of meaning.
When you become the 'right-person', what you do is you start separating yourself from other people
you begin to have a certain uniqueness,
as long as you follow on other people, as long as you being a 'copy-cat',
you will never, ever be the best 'copy-cat' in the world,
but you will be the best you could be,
I challenge you to define your value.
That everybody won't see it, that everybody won't join you, that everybody won't have the vision...
it's necessary to know that.
That you are an uncommon breed.
It's necessary that you align yourself with people and attract people into your business,
who are hungry!
People who are unstoppable and unreasonable,
people who are rebuilding to live life just as it is and who want more!
The people that are living their dreams, of party winners, to attach themselves to.
the people that are living their dreams, are the people that know
that if it's gonna happen it's up to them
If you want to be more successful,
if you want have and do stuff you never done before,
I'm asking you, to Invest in you!
To Invest in you!
Someones opinion of you, does not have to become your reality.
That you don't have to go through life, being a victim.
And even though you face disappointments, you have to know within yourself...
that I can do this, even if no one see it for me , I've must see it for myself.
This is what I believe and I'm willing to die for it. Period.
No matter how bad it is or how bad it gets,
I'm going to make it!
I wanna represent an idea. I wanna represent possibilities.
some of you right now, you want to go to next level.
'I want a council, I want to be a engineer, I want to be a doctor." Listen to me:
You can't get to that level.
You can't get to that level economically where you want to be, until you start invest in your mind.
You are not reading books.
I challenge you all to go to the conference.
I dare you to invest tim!
I dare you to be alone!
I dare you to spent an hour to get to know yourself.
When you Become who you are,
when you Become the person that you are created to be, designed to be who you were designed to be.
When you become an individual.
What you do is: take yourself and you start separating yourself from other people.
I'm challenging you, to get to the place where people do not like you or do not even bother you no more. Why? Cause you are not concerned to make them happy.
Because you try to blow, you try to the next level.
I need you to invest in your mind.
If you still taking about your dream.
If you still taking about your goals.
But you have not done anything
JUST TAKE THE FIRST STEP!
You can make your parent proud,
you can make your school proud,
you can touch millions of people lives and the word will never be the same again,
because you came this way.
Don't let nobody steal your dream!
After we face a rejection and a "NO" or we have a meeting and no one shows up,
or somebody said, you can count on me, and they don't come through
what if we had that kind of attitude that cause reposses, nobody believes in you, you扉e lost again, and again, and again! the lights are cut off
but you still looking at your dream, reviewing it every day and saying to yourself:
IT'S NOT OVER, UNTIL I WIN!
You can live your dream!
Thanks to VeNoMmx for his amazing help!`;

const splitString = someString.split("\n").join(" ").split(",").join("").split(".").join("").split("!").join("").split("?").join("").split(":").join("").split(";").join("").toLowerCase().split(' '); // remove . , ! ? :

while (splitString.indexOf("") !== -1) {
    splitString.splice(splitString.indexOf(""), 1); // deleting of an empty elements
}

const makeUniq = (arr) => {
    const uniqSet = new Set(arr); // unique list
    return [...uniqSet];
}


const newArr = makeUniq(splitString);

module.exports.newArr = newArr;