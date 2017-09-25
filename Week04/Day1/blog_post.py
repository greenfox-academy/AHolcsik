# # BlogPost
# - Create a `BlogPost` class that has
#   - an `author_name`
#   - a `title`
#   - a `text`
#   - a `publication_date`
# - Create a few blog post objects:
#   - "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
#     - Lorem ipsum dolor sit amet.
#   - "Wait but why" titled by Tim Urban posted at "2010.10.10."
#     - A popular long-form, stick-figure-illustrated blog about almost everything.
#   - "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
#     - Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.

class BlogPost(object):
    author_name = ''
    title = ''
    text = ''
    publication_date = ''

blog_post1 = BlogPost(author_name = 'John Doe', title = 'Lorem ipsum', text = 'Lorem ipsum dolor sit amet.', publication_date = '2000.05.04.')
blog_post2 = BlogPost(author_name = 'Tim Urban', title = 'Wait but why', tetx = 'A popular long-form, stick-figure-illustrated blog about almost everything.', publication_date = '2010.10.10')
blog_post3 = BlogPost(author_name = 'William Turton', title = 'One Engineer Is Trying to Get IBM to Reckon With Trump', text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', publication_date = '2017.03.28')