import React, { useEffect, useState } from 'react'
import './styles.css'
import ChatBot from 'react-simple-chatbot'
import axios from 'axios'
import logo from "./logo.svg"
import botAvatar from './1200px-BMS_College_of_Engineering.png'
import { Button, Container, Header , Segment, Grid} from 'semantic-ui-react';
import {EmailShareButton} from 'react-share';
import {EmailIcon} from 'react-share';
import { ThemeProvider } from 'styled-components';



const handleNewUserMessage = (msg, setData, setTitle) => {
  // const res = API(newMessage)
  axios
    .get('http://localhost:8000/service/chat/' + msg)
    .then((res) => {
      var data = res.data
      console.log(res.data.data)
      if (typeof data.data === typeof {}) {
        setData(res.data.data.link)
        setTitle(res.data.data.title)
      }
      if (typeof data.data === typeof '') {
        setData(res.data.data)
      }
    })
    .catch((e) => console.log(e))
}

function GetResponse({ previousStep }) {
  const [data, setData] = useState('')
  const [title, setTitle] = useState('')
  useEffect(() => {
    handleNewUserMessage(previousStep.value, setData, setTitle)
  }, [previousStep.value])

  return title !== '' ? (
    <p>
      {title}{' '}
      <a href={data} target='_blank' rel='noopener noreferrer'>
        Here
      </a>
    </p>
  ) : (
    <p>{title}{data}</p>
  )
}

function CallBack() {
  return <a class="a1" href='https://docs.google.com/forms/d/e/1FAIpQLSdRDpyFCfttjQBy3IaBU3ChO8XaklmDjAg7cuCKJ_XvyLUOMQ/viewform' target="_blank">Fill here</a>
}

function Email() {
  return <>
  <Container>
    <Segment>
      <EmailShareButton
      subject={"BMSCE Enquiry"}
      body={"This email is regarding my query for :"}
      >        
          <EmailIcon logoFillColor="white" round={true}></EmailIcon>
      </EmailShareButton>
    </Segment>
    <Segment><p>Email add: info@bmsce.in</p></Segment>
  </Container>
  </>;
}


function GoToCse(){
  return <a class="a1" href="https://bmsce.ac.in/home/Computer-Science-and-Engineering-About" target="_blank">Go to Cse About</a>
  }
function GoToCseContacts(){
  return<a class="a1" href="https://bmsce.ac.in/home/Computer-Science-and-Engineering-Contact-Us" target="_blank">Go to Staff Contacts</a>  
}

function GoToIse(){
  return<a class="a1" href="https://bmsce.ac.in/home/Information-Science-and-Engineering-Contact-Us" target="_blank">Go to Ise About</a>
}
function GoToIseContacts(){
  return<a class="a1" href="https://bmsce.ac.in/home/Information-Science-and-Engineering-Contact-Us" target="_blank">Go to Staff Contacts</a>
}

function GoToMe(){
  return<a class="a1" href='https://bmsce.ac.in/home/Mechanical-Engineering-About'target="_blank">Go to ME About</a>
}

function GoToMeContacts(){
  return<a class="a1" href='https://bmsce.ac.in/home/Mechanical-Engineering-Contact-Us'target="_blank">Go to Staff Contacts</a>
  }

function GoToCv(){
  return<a class="a1" href='https://bmsce.ac.in/home/Civil-Engineering-About'target="_blank">Go to CV About</a>
}
function GoToCvContacts(){
  return<a class="a1" href='https://bmsce.ac.in/home/Civil-Engineering-Contact-Us'target="_blank">Go to Staff Contacts</a>
  }

function GoToCh(){
  return<a class="a1" href='https://bmsce.ac.in/home/Chemical-Engineering-About'target="_blank">Go to CH About</a>
}

function GoToChContacts(){
  return<a class="a1" href='https://bmsce.ac.in/home/Chemical-Engineering-Contact-Us'target="_blank">Go to Staff Contacts</a>
}

function GoToBt(){
  return<a class="a1" href='https://bmsce.ac.in/home/Bio-Technology-About' target="_blank">Go to BT About</a>
}
function GoToBtContacts(){
  return<a class="a1" href='https://bmsce.ac.in/home/Bio-Technology-Contact-Us'target="_blank">Go to Staff Contacts</a>
  }

export default function Chatbot() {
  const steps = [
    {
      id: 'start',
      message:
        'Hello, Good Afternoon. Welcome to B.M.S College of Engineering. How may I help you?',
      trigger: 'next',
    },
    {
      id: 'next',
      message:
        'Kindly choose from one of the following categories or type your question to get started.',
      trigger: 'resolve',
    },
    {
      id: 'resolve',
      options: [
        {
          value: 1,
          label: 'Request a call back',
          trigger: 'callBack',
        },
        {
          value: 2,
          label: 'Send Mail',
          trigger: 'email',
        },
        {
          value: 3,
          label: 'Programs',
          trigger: 'userQueryProgram',
        },
        {
          value: 4,
          label: 'Type Any Queries',
          trigger: 'userQuery',
        },
      ],
    },

    {
      id: 'userQueryProgram',
      options: [
        {
          value: 1,
          label: 'CSE',
          trigger: 'CSE', 
        },
       {
          value: 2,
          label: 'ISE',
          trigger: 'ISE',
        },
        {
          value: 3,
          label: 'ME',
          trigger: 'ME',
        },
        {
          value: 4,
          label: 'CV',
          trigger: 'CV',
        },
        {
          value: 5,
          label: 'CH',
          trigger: 'CH',
        },
        {
          value: 6,
          label: 'BT',
          trigger: 'BT',
        },
      ],
      
    },
    
    {id:'CSE',
      options:[
        {
          value:1,
          label:'About',
          trigger:'CseAbout',
        },
        {
          value:2,
          label:'Staff Contacts',
          trigger:'CseContacts',
        },
      ],
    },
    {id:'ISE',
      options:[
        {
          value:1,
          label:'About',
          trigger:'IseAbout',
        },
        {
          value:2,
          label:'Staff Contacts',
          trigger:'IseContacts',
        },
      ],
    },
    {id:'ME',
      options:[
        {
          value:1,
          label:'About',
          trigger:'MeAbout',
        },
        {
          value:2,
          label:'Staff Contacts',
          trigger:'MeContacts',
        },
      ],
    },
    {id:'CV',
      options:[
        {
          value:1,
          label:'About',
          trigger:'CvAbout',
        },
        {
          value:2,
          label:'Staff Contacts',
          trigger:'CvContacts',
        },
      ],
    },
    {id:'BT',
      options:[
        {
          value:1,
          label:'About',
          trigger:'BtAbout',
        },
        {
          value:2,
          label:'Staff Contacts',
          trigger:'BtContacts',
        },
      ],
    },
    {id:'CH',
      options:[
        {
          value:1,
          label:'About',
          trigger:'ChAbout',
        },
        {
          value:2,
          label:'Staff Contacts',
          trigger:'ChContacts',
        },
      ],
    },
    {
      id: 'userQueryNext',
      user: true,
      trigger: 'userQuery',
    },
    {
      id: 'callBack',
      component: <CallBack />,
      trigger: 'start',
    },
    {
        id: 'CseAbout',
        component: <GoToCse />,
        trigger: 'next',
    },
    {
        id: 'CseContacts',
        component: <GoToCseContacts />,
        trigger: 'next',      
    },
    {
        id: 'IseAbout',
        component: <GoToIse />,
        trigger: 'next',
    },
    {
        id: 'IseContacts',
        component: <GoToIseContacts />,
        trigger: 'next',
    },
    {
        id: 'MeAbout',
        component: <GoToMe />,
        trigger: 'next',
    },
    {
        id: 'MeContacts',
        component: <GoToMeContacts />,
        trigger: 'next',
    },
    {
        id: 'CvAbout',
        component: <GoToCv />,
        trigger: 'next',
    },
    {
        id: 'CvContacts',
        component: <GoToCvContacts />,
        trigger: 'next',
    },
    {
        id: 'ChAbout',
        component: <GoToCh />,
        trigger: 'next',
    },
    {
        id: 'ChContacts',
        component: <GoToChContacts />,
        trigger: 'next',
    },
    {
        id: 'BtAbout',
        component: <GoToBt />,
        trigger: 'next',
    },
    {
        id: 'BtContacts',
        component: <GoToBtContacts />,
        trigger: 'next',
    },
    {
      id: 'email',
      component: <Email />,
      trigger: 'next',
    },
    {
      id: 'userQuery',
      component: <GetResponse />,
      asMessage:true,
      trigger: 'userQueryNext',
    },
  ]
  const theme = {
    background: '#cdd0d4',
    fontFamily: 'Segoe UI',
    headerBgColor: '#0052b0',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#2a6fc4',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  return (

    <div>
      
      <ThemeProvider theme={theme}>

        <ChatBot
          steps={steps}
          recognitionEnable={true}
          headerTitle='BMSCE BOT'
          fontFamily='Segoe UI'
          botAvatar = {botAvatar}
          floating={true}
        />
      </ThemeProvider>
      <div className='showBot' />
    </div>
  )
}