export interface HighlightDetailProps {
  highlightDetails: object
}
const HighlightDetail = ({ highlightDetails }: HighlightDetailProps) => {
  console.log(highlightDetails)
  return <section></section>
}

export default HighlightDetail

export async function getServerSideProps (context: any) {
  let highlightDetails = await fetch(
    `https://web-dev.dev.kimo.ai/v1/activities/${context.params.id}`
  )
  return {
    props: {
      highlightDetails: await highlightDetails.json()
    }
  }
}
