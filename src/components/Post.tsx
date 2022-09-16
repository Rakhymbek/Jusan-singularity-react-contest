import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { IPosts } from '../types';

interface PostProps {
    post: IPosts;
}

const CustomBox = styled('div')`
    padding: 20px;
    border: 1px solid #5a55e4;
    border-radius: 4px;
    margin-bottom: 10px;
`

const Post = ({post}: PostProps) => {
    return (
        <CustomBox>
            <Typography variant='subtitle1'>#{post.id}</Typography>
            <Typography variant='subtitle2' fontWeight={600}>Title: {post.title}</Typography>
            <Typography variant='body2'>{post.body}</Typography>
        </CustomBox>
    );
};

export default Post;