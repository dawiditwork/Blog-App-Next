'use client';

import {
  Button,
  Modal,
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
} from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function DashPosts() {
  const { user } = useUser();
  console.log('user', user);

  const [userPosts, setUserPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/get', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: user?.publicMetadata?.userMongoId,
          }),
        });
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setUserPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (user?.publicMetadata?.isAdmin) {
      fetchPosts();
    }
  }, [user?.publicMetadata?.isAdmin, user?.publicMetadata?.userMongoId]);

const handleDeletePost = async () => {
  setShowModal(false);

  try {
    const res = await fetch('/api/post/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postId: postIdToDelete,
        userId: user?.publicMetadata?.userMongoId,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUserPosts((prev) =>
        prev.filter((post) => post._id !== postIdToDelete)
      );

      setPostIdToDelete('');
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.log(error.message);
  }
};

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
          <div className="flex justify-end mb-4">
       <Link href="/dashboard/create-post">
        <Button color="purple">
          Add new post
        </Button>
      </Link>
    </div>
      {user?.publicMetadata?.isAdmin && userPosts.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
  <TableHead>
    <TableRow>
      <TableHeadCell>Date updated</TableHeadCell>
      <TableHeadCell>Post image</TableHeadCell>
      <TableHeadCell>Post title</TableHeadCell>
      <TableHeadCell>Category</TableHeadCell>
      <TableHeadCell>Delete</TableHeadCell>
      <TableHeadCell>
        <span>Edit</span>
      </TableHeadCell>
    </TableRow>
  </TableHead>

  <TableBody className='divide-y'>
    {userPosts?.map((post) => (
      <TableRow
        key={post._id}
        className='bg-white dark:border-gray-700 dark:bg-gray-800'
      >
        <TableCell>
          {new Date(post.updatedAt).toLocaleDateString()}
        </TableCell>

        <TableCell>
          <Link href={`/post/${post.slug}`}>
            <img
              src={post.image}
              alt={post.title}
              className='w-20 h-10 object-cover bg-gray-500'
            />
          </Link>
        </TableCell>

        <TableCell>
          <Link
            className='font-medium text-gray-900 dark:text-white'
            href={`/post/${post.slug}`}
          >
            {post.title}
          </Link>
        </TableCell>

        <TableCell>{post.category}</TableCell>

        <TableCell>
          <span
            className='font-medium text-red-500 hover:underline cursor-pointer'
            onClick={() => {
              setShowModal(true);
              setPostIdToDelete(post._id);
            }}
          >
            Delete
          </span>
        </TableCell>

        <TableCell>
          <Link
            className='text-teal-500 hover:underline'
            href={`/dashboard/update-post/${post._id}`}
          >
            Edit
          </Link>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
        </>
      ) : (
        <p>You have no posts yet!</p>
      )}
<Modal
  show={showModal}
  onClose={() => setShowModal(false)}
  popup
  size='md'
>
  <div className='p-6'>
    <div className='text-center'>
      <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />

      <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
        Are you sure you want to delete this post?
      </h3>

      <div className='flex justify-center gap-4'>
        <Button color='failure' onClick={handleDeletePost}>
          Yes, I&apos;m sure
        </Button>

        <Button color='gray' onClick={() => setShowModal(false)}>
          No, cancel
        </Button>
      </div>
    </div>
  </div>
</Modal>
    </div>
  );
}