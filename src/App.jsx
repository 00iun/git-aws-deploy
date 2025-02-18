import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>안녕하세요</p>
      <p>오즈스쿨 수강 중인 이희정입니다</p>
      <p>여긴 vite 예요</p>
      <p>감사합니다</p>
      <h1>2025.02.17</h1>
      <p>AWS 코드 업데이트</p>
      <h2>2025.02.18</h2>
      <p>AWS github actions 배포자동화</p>
      <button>최종 테스트 "배포자동화!!!!"</button>
    </>
  )
}

export default App
