import Layout from "../../Components/Layout/Layout"
import GitHubButton from 'react-github-btn'
const MyAcc = () => {
  return (
    <Layout color={"bg-gradient-to-b from-emerald-300 to-emerald-600"}>
    <div className="main-container w-full flex items-center justify-center">
      <div className="flex items-center gap-5 flex-col sign-container border-2 rounded-lg border-emerald-500 shadow-2xl bg-slate-100 h-4/5 w-2/5 ">
       <div className="flex mt-10 text-4xl text-emerald-500 font-bold"><h2>My Account</h2></div>
       <div className="personal-data">
        <figure><img  src="https://avatars.githubusercontent.com/u/92193274?v=4" className="border-4 border-emerald-500 rounded-full h-60" alt="profile-picture" /></figure>
       </div>
       <p className="flex flex-col text-center ">
        <span className="text-3xl font-semibold">@NaoRYK</span>
        <span className="text-xl text-center mt-2 ">Nao</span>
        <span className="text-center font-light p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, repudiandae deserunt incidunt recusandae vitae sequi aspernatur nisi quasi quos quaerat.
        </span>
       </p>

       
<GitHubButton href="https://github.com/NaoRYK" data-color-scheme="no-preference: dark_high_contrast; light: light_high_contrast; dark: dark_high_contrast;" data-size="large" aria-label="Follow @NaoRYK on GitHub">Follow @NaoRYK</GitHubButton>

      </div>
    </div>
  </Layout>
  )
}

export default MyAcc