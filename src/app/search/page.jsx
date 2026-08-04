'use client';

import { Suspense, useEffect, useState } from 'react';

import { Button, Select, TextInput } from 'flowbite-react';
import { useRouter, useSearchParams } from 'next/navigation';

import PostCard from '../components/PostCard';

function SearchContent() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(searchParams);

    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category');

    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        searchTerm: searchTermFromUrl || '',
        sort: sortFromUrl || 'desc',
        category: categoryFromUrl || 'uncategorized',
      });
    }

    const fetchPosts = async () => {
      setLoading(true);

      const res = await fetch('/api/post/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          limit: 9,
          order: sortFromUrl || 'desc',
          category: categoryFromUrl || 'uncategorized',
          searchTerm: searchTermFromUrl,
        }),
      });

      if (!res.ok) {
        setLoading(false);
        return;
      }

      const data = await res.json();

      setPosts(data.posts);
      setLoading(false);

      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    };

    fetchPosts();
  }, [searchParams]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({
        ...sidebarData,
        searchTerm: e.target.value,
      });
    }

    if (e.target.id === 'sort') {
      setSidebarData({
        ...sidebarData,
        sort: e.target.value || 'desc',
      });
    }

    if (e.target.id === 'category') {
      setSidebarData({
        ...sidebarData,
        category: e.target.value || 'uncategorized',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(searchParams);

    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);

    router.push(`/search?${urlParams.toString()}`);
  };

  const handleShowMore = async () => {
    const startIndex = posts.length;

    const res = await fetch('/api/post/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        limit: 9,
        order: sidebarData.sort,
        category: sidebarData.category,
        searchTerm: sidebarData.searchTerm,
        startIndex,
      }),
    });

    if (!res.ok) {
      return;
    }

    const data = await res.json();

    setPosts([...posts, ...data.posts]);

    if (data.posts.length === 9) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  return (
    <div className='mx-auto flex w-full max-w-7xl flex-col md:flex-row'>
      <aside className='border-b border-gray-700 p-6 md:min-h-screen md:w-72 md:shrink-0 md:border-b-0 md:border-r'>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
          <div className='flex items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>
              Search Term:
            </label>

            <TextInput
              placeholder='Search...'
              id='searchTerm'
              type='text'
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>

          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort:</label>

            <Select onChange={handleChange} id='sort'>
              <option value='desc'>Latest</option>
              <option value='asc'>Oldest</option>
            </Select>
          </div>

          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Category:</label>

            <Select onChange={handleChange} id='category'>
              <option value='uncategorized'>Uncategorized</option>
              <option value='reactjs'>React.js</option>
              <option value='nextjs'>Next.js</option>
              <option value='javascript'>JavaScript</option>
            </Select>
          </div>

          <Button type='submit' outline gradient='purple'>
            Apply Filters
          </Button>
        </form>
      </aside>

      <main className='min-w-0 flex-1 px-5 py-10 sm:px-8'>
        <div className='mb-8'>
          <p className='text-sm font-bold uppercase tracking-[0.18em] text-teal-500'>Explore the blog</p>
          <h1 className='mt-2 text-3xl font-black tracking-tight'>Search results</h1>
        </div>

        <div className='grid gap-5'>
          {!loading && posts.length === 0 && (
            <p className='text-xl text-gray-500'>No posts found.</p>
          )}

          {loading && (
            <p className='text-xl text-gray-500'>Loading...</p>
          )}

          {!loading &&
            posts &&
            posts.map((post) => (
              <PostCard key={post._id} post={post} compact />
            ))}

          {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full p-7 text-lg text-teal-500 hover:underline'
            >
              Show More
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default function Search() {
  return (
    <Suspense fallback={null}>
      <SearchContent />
    </Suspense>
  );
}
