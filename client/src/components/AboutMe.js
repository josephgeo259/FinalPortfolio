import React, { Component } from 'react';
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';


const Image = styled.img`
border-radius: 1px;
text-align: center;
height: 75vh;
width: 400px ;
border: greenyellow;

`
const Image2 = styled.img`
border-radius: 1px;
padding: 2em 2em;
text-align: center;
height: 75vh;
width: 400px ;
border: greenyellow;
`
const UserWrapper = styled.div`
border-radius: 1px;
padding: 0.25em 1em;
margin:.25em 11em;
color: green;
text-align: center;
height: 300;
background-color: black;

body {
    min-height: 100vh;
    margin: 0 18em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;

}
h1 {
    font-family: 'Impact';
    font-size: 80px;
    padding: 1px;
}
p {
    font-family: 'Comic Sans MS';
    font-size: 20px;
    padding: 4px;
}
}`

class AboutMe extends Component {


    render() {
        return (
            <UserWrapper>
                <h1> Who is Geo Joseph ? </h1>
                <Image src='https://i.imgur.com/QhP585F.jpg?1'/>
                <p> Little about me... Code is my passion.  
                    I am a problem solving full stack developer. 
                    With a ten year background in customer service. 
                    I am a born leader in the work environment. 
                    I facilitate a shared purpose that gives all my works meaning. 
                    I love to devour information to gain substantial amounts of knowledge but not just for me but for anyone that has a passion to learn. 
                    Regardless if it is technology for my coding projects, even sports in which is my other passion.
                    One can not have too much growth in my opinion. 
                    I've learned how to attack problems with patience and resolve through a lot of my projects and repetition.
                    Without a teamwork first mindset and the AGILE life-cycle implication I wouldn’t be the coder I am today.
                    Failure will never overtake me if my determination to succeed is strong enough. My family gave me the greatest gift anyone could give another person, they always believed in me.</p>
                <hr/>
                <h1> How I got started Coding! </h1>
                <Image src='https://i.imgur.com/TlN3qsu.png' />
                <p> One day, I really wanted to learn how to code and build things I could be proud of and show to people.
                    Didn't really know how to start. 
                    Then I came across a program for web development and it changed my life. 
                    General Assembly’s full-time Web Development Immersive (WDI) is a 12-weeks long immersive program dedicated to designing and building web applications in AGILE life-cycle and implemented through the "Extreme Programming" methodology. 
                    The program emphasizes problem-solving techniques and collaborative development.
                    I developed full-stack web applications progressively implementing different technologies. 
                    I learned at a real fast pace and learned most of these skills in just 3 months time.  </p>
                <hr/>
                <h1> Check out my Projects! </h1>

            </UserWrapper>
        );
    }
}

export default AboutMe;