import Script from "next/script"

export default function SWRegister() {
  return (
    <Script id="sw-register">{`
      if (navigator.serviceWorker) {
        navigator.serviceWorker
          .register('./sw.parents.js', { scope: '/parents' })
          .then((reg) => {
            console.log('Registration succeeded. Scope is ' + reg.scope);
          }).catch((error) => {
            console.log('Registration failed with ' + error);
          });
      }
    `}</Script>
  )
}
