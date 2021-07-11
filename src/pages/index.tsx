type Props = {
  title: string
}

const Home = ({ title = 'React Avançado' }: Props) => {
  return (
    <div>
      <h1>Hello {title}!</h1>
    </div>
  )
}

export default Home
