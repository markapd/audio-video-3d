import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  

  return (
   <div   style={{width:'900px',margin:'0px auto', backgroundColor:'gray'}}>
      <h2>Audio</h2>
     <div>
      <h3>MP3</h3>
      <audio src="http://codeskulptor-demos.commondatastorage.googleapis.com/descent/bomb.mp3" controls></audio>
     </div>
     <div>
     <h3>OGG</h3>
      <audio src="http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/thrust.ogg" controls></audio>
     </div>
     <div>
     <h3>OGA</h3>
      <audio src="https://upload.wikimedia.org/wikipedia/commons/1/16/Tim_Berners-Lee_-_Today_%28flac_-sample_s16_-f_ogg%29.oga" controls></audio>
     </div> 
     <div>
      <h3>WAV</h3>
      <audio src="http://localhost:3000/audio/spring.wav" controls></audio>
     </div>

    <h2>Video</h2>
    <div>
      <h3>MP4</h3>
     <video width="600px" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls/>
    </div>
    <div>
      <h3>WEBM</h3>
     <video width="600px" src="https://file-examples-com.github.io/uploads/2020/03/file_example_WEBM_480_900KB.webm" controls/>
    </div>
    <div>
      <h3>OGV</h3>
     <video width="600px" src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-ogv-file.ogv" controls/>
    </div>
    <div>
      <h3>M4V</h3>
     <video width="600px" src="http://localhost:3000/video/video1.m4v" controls/>
    </div>
    <div> 
      <h3>ogg</h3>
     <video width="600px" src="https://file-examples-com.github.io/uploads/2018/04/file_example_OGG_480_1_7mg.ogg" controls/>
    </div> 
    
    <br/>

    <div style={{display:'flex', justifyContent:'space-between'}}>
      <Link passHref href="three2">
        <button style={{padding:'50px'}}>GLTF</button>
      </Link>
      <Link passHref href="three">
        <button style={{padding:'50px'}}>GLB</button>
      </Link>
    </div>

   </div>
  )
}
