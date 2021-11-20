import { Link } from 'react-router-dom';
import React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const Blogs = ({ blogs, handleDelete, handleLike }) => {
	return (
		<Container>
			<Typography variant="h4">Today's Blogs</Typography>
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				{blogs
					.sort((a, b) => b.likes - a.likes)
					.map((blog) => (
						<ListItem alignItems="flex-start" button="true" key={blog.id}>
							<ListItemAvatar>
								<Avatar />
							</ListItemAvatar>
							<ListItemText
								primary={
									<Link
										style={{ textDecoration: 'none' }}
										className="link"
										to={`blogs/${blog.id}`}
									>
										<Typography sx={{ textDecoration: 'none' }} variant="h6">
											{blog.title}
										</Typography>
									</Link>
								}
								secondary={
									<React.Fragment>
										<Typography
											sx={{ display: 'inline' }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											- By {blog.author}
										</Typography>
									</React.Fragment>
								}
								variant="h6"
							></ListItemText>
						</ListItem>
					))}
			</List>
		</Container>
	);
};

export default Blogs;

{
	/* <Blog
    handleLike={handleLike}
    handleDelete={handleDelete}
    key={blog.title}
    blog={blog}
/> */
}
