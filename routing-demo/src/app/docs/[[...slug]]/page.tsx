import React from 'react'

const DocsPage = async ({
  params
}: {
  params: Promise<{ slug: string }>;
}
) => {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <div>
        viewing docs for feature {slug[0]} and concept {slug[1]}
      </div>
    )
  } else if (slug?.length === 1) {
    return <h1>
      viewing docs for feature {slug[0]}
    </h1>
  }
  return (
    <div>Docs Page is here</div>
  )
}

export default DocsPage