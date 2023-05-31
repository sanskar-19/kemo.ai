const FetchHighlights = async () => {
  try {
    let apiResponse = await fetch("https://web-dev.dev.kimo.ai/v1/highlights", { Headers: { 'Content-Type': 'application/json' } })
    // let jsonData = await apiResponse.json()
    console.log(await apiResponse.json())
  } catch (error) {
    throw error
  }
}

export const controller = {
  FetchHighlights
}