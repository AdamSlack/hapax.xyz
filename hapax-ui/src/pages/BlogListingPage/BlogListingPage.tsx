import { Card, Grid, Link, Spacer, Text } from "@nextui-org/react"
import { useNavigate } from 'react-router-dom'
import MainLayout from "../../Layouts/MainLayout"

const blogPosts = [
  { title: 'NextUI + React Hook Form', path: './next-ui-react-hook-form',  summary: <Text>A demonstration of <Link href="https://nextui.org/" target='_blank' onClick={(e) => e.stopPropagation()}>NextUI</Link> controls integrated with <Link href="https://react-hook-form.com/" target='_blank' onClick={(e) => e.stopPropagation()}>React Hook Form</Link></Text> },
  { title: 'Code Blog Demo', path: './code-blog-demo',  summary: <Text>A demonstration of preformatted code blocks</Text> },
  { title: 'NextUI + React Hook Form', path: './next-ui-react-hook-form',  summary: <Text>A demonstration of <Link href="https://nextui.org/" target='_blank' onClick={(e) => e.stopPropagation()}>NextUI</Link> controls integrated with <Link href="https://react-hook-form.com/" target='_blank' onClick={(e) => e.stopPropagation()}>React Hook Form</Link></Text> },
  { title: 'NextUI + React Hook Form', path: './next-ui-react-hook-form',  summary: <Text>A demonstration of <Link href="https://nextui.org/" target='_blank' onClick={(e) => e.stopPropagation()}>NextUI</Link> controls integrated with <Link href="https://react-hook-form.com/" target='_blank' onClick={(e) => e.stopPropagation()}>React Hook Form</Link></Text> },
  { title: 'NextUI + React Hook Form', path: './next-ui-react-hook-form',  summary: <Text>A demonstration of <Link href="https://nextui.org/" target='_blank' onClick={(e) => e.stopPropagation()}>NextUI</Link> controls integrated with <Link href="https://react-hook-form.com/" target='_blank' onClick={(e) => e.stopPropagation()}>React Hook Form</Link></Text> },
  { title: 'NextUI + React Hook Form', path: './next-ui-react-hook-form',  summary: <Text>A demonstration of <Link href="https://nextui.org/" target='_blank' onClick={(e) => e.stopPropagation()}>NextUI</Link> controls integrated with <Link href="https://react-hook-form.com/" target='_blank' onClick={(e) => e.stopPropagation()}>React Hook Form</Link></Text> },
]

export const BlogListingPage = () => {
  const navigate = useNavigate()
  return (
    <MainLayout>
      <Grid xs={12}>
        <Text h1>Blog Posts</Text>
      </Grid>
      {
        blogPosts.map(({ title, path, summary }, index) => (
          <Grid key={`${path}-${index}`} xs={12} sm={6} md={6} lg={4}>
            <Card hoverable clickable onClick={() => navigate(path)}>
              <Card.Body css={{ py: '$10'}}>
                <Text h4>{title}</Text>
                <Spacer />
                <Text>
                  {summary}
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        ))
      }
    </MainLayout>
  )
}
export default BlogListingPage;