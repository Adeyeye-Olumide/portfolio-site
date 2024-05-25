import logo from './logo.svg';
import './App.scss';
import { useCallback, useEffect } from 'react';
import { projectsArray } from './projects';
import ButtonComponent from './button-component/button-component';



function App() {
  
  const skillsArray = [ 
    "JavaScript",
    "Node.js",
    "TypeScript",
    "CSS",
    "SASS",
    "GraphQL",
    "React",
    "Redux",
    "Express",
    "webpack",
    "Jest",
    "Git",
    "SEO"
  ]

  let checked = ''
  
  const buttonHandler = useCallback((e)=> {

    if(!e.target.tagName == 'button' || !e.target.textContent == 'About' 
    || !e.target.textContent == 'Contact' || 
    !e.target.textContent == 'Portfolio') return

    console.log(e.target)

    const firstPage =  document.querySelector('.upper')
    const header = document.querySelector('.App-header')

   
  //  const secondPage = document.querySelector('.lower')
  firstPage.classList.add('raise-page')
  header.classList.add('addBoxShadow')

  checked = 'checked'
   
      
  })

  const keypressHandler = useCallback((e)=> {

    if(e.key != 'ArrowDown') return

    console.log('done')
    
    const firstPage =  document.querySelector('.upper')
    const header = document.querySelector('.App-header')
   
   //  const secondPage = document.querySelector('.lower')
    firstPage.classList.add('raise-page')
    header.classList.add('addBoxShadow')
    checked = 'checked'

  })

  const homebuttonHandler = useCallback((e)=> {


    const firstPage =  document.querySelector('.upper')
    const header = document.querySelector('.App-header')

    console.log(e.target.closest('a'))
    if(!e.target.tagName == 'button' || e.target.closest('a') && (!e.target.closest('a')?.textContent == 'About' 
    || !e.target.closest('a')?.textContent == 'Contact' || 
    !e.target.closest('a')?.textContent == 'Portfolio')) return

     

      
 
      firstPage.classList.add('raise-page')
      header.classList.add('addBoxShadow')
    

   

    

   

    console.log(e.target.closest('h5'))
    if ( e.target.closest('h5') && (e.target.closest('h5').textContent == 'Home')) {
      firstPage.classList.remove('raise-page')
      header.classList.remove('addBoxShadow')
      checked = ''

    }

    // const firstPage =  document.querySelector('.upper')
    // const header = document.querySelector('.App-header')
    
   //  const secondPage = document.querySelector('.lower')
    



  })

  useEffect(()=> {
    const element = document.querySelector('.enter')
    const optionsElement = document.querySelector('.options')
    const lower = document.querySelector('.lower')
    

    element.addEventListener('click', buttonHandler)
    optionsElement.addEventListener('click', homebuttonHandler)
    // optionsElement.addEventListener('click', buttonHandler)
    window.addEventListener('keydown', keypressHandler)
   

    let timerId = setTimeout(()=> {
      lower.style.display = 'flex'
      clearTimeout(timerId)
    }, 2000)


  }, [])
  return (
    <div className="App" style={{ backgroundImage: "url(pexel.jpg)" }}>
        <header className="App-header">
          <h5>Elysium</h5>

          <div className='options'>
            <h5>Home</h5>
            <h5><a href={'#About'}>About</a></h5>
            <h5><a href={'#Portfolio'}>Portfolio</a></h5>
            <h5><a href={'#Contact'}>Contact</a></h5>
          </div>

          <div className='button hire-me'>
            <ButtonComponent text='HIRE ME'/>
          </div>
         
          
        </header>
      <div className='upper' style={{backgroundImage: "url(pexel.jpg)"}}>

        <div className="content">

          <div className='first-line'>
           <h1>
            Hello! I am Olumide, a <span>Front-end Web developer</span>
           </h1>
          </div>
          
         

          <div className='tags'>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>JavaScript</h4>
            <h4>React</h4>
            <h4>Typescript,</h4>
            <h4>..and every other thing Frontend</h4>
          </div>

          <div className='button enter'>
            <ButtonComponent text='TAKE A LOOK'></ButtonComponent>
          </div>
          
        </div>

      </div>

      <div className='lower'> 
        <div className="greater">
          <div className='first-section'>
            <div className="first-title">
              <h1>ABOUT ME</h1>
            </div>

            <div className="first-description" id='About'>
              <h4>Self taught web developer specializing in the frontend</h4>
            </div>
          </div>

          <div className="second-section">
            <div className="second-title">
              <h3>Get to know me!</h3>

              <h5>
                I'm a Web developer proficient in JavaScript and the web. I'm passionate about web performance, accessibility, user & developer experience.

                I follow a minimalist mindset, using technology to improve people's lives and create value for businesses.

                In my free time, I build side projects and like exploring new technologies. You can see some of my work in the projects section below.

                I'm open to collaboration opportunities where I can contribute, learn and grow. Don't hesitate to reach out if you think my skills and experience are a good fit for your next project.
              </h5>
            </div>

            <div className="skills-container">
              <h3>ToolKit</h3>
              <div className='skills'>
              {
                skillsArray.map(skill=> {
                return (<div className='skill'>
                    <h4>{skill}</h4>
                  </div>)

                })
              }
              </div>
              
            </div>
          </div>
        </div>

        <div className="projects" id='Portfolio'>
          <h1>Project</h1>
            {
              projectsArray.map(({projectName, intro, description, skills, imgUrl, projectUrl}, i)=> {
                console.log(imgUrl)


              return(
                <div className={`project ${i % 2 !=0? 'reverse-order': ""}`}>
                  <div className='project-description'>
                    <h2>{projectName}</h2>
                    <h3>{intro}</h3>
                    <div className="skills">
                      {
                        skills.map(skill=> {
                        return (<div className='skill'>
                            <h4>{skill}</h4>
                          </div>)

                        })
                      }
                    </div>
                    <div className='check-it'>
                      <a href={projectUrl}  target="_blank"><ButtonComponent text='CHECK IT'/></a>
                    </div>
                  </div>
              
                      
                  
                  <div className="image-container">
                    <img src={imgUrl} alt="" srcset="" />
                    <div>
                      <h4>{description.split('.').map(string=> {
                        return (
                          <li>
                            <ul>{string}</ul>
                          </li>
                        )
                      })}</h4>
                    </div>
                  </div>

              </div>


         
          )
        })
      }
          
    </div>
        <div className="footer" id='Contact'>
          <h3>Adeyeye Olumide</h3>
          <h3>Email: olumideadeyeye.webdev@gmail.com</h3>
          <h3>Github: https://github.com/Adeyeye-Olumide</h3>
          <h3>Phone: +1 (289)608-9621, +1 (416)809-2711</h3>
        </div>

      </div>

      
    </div>
  );
}

export default App;
