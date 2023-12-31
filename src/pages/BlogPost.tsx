import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormatTime } from "../utils/FormatTime";
import { Helmet } from "react-helmet";
import { BlogPostData } from "../structs/BlogPostData";
import { HiArrowLongLeft } from "react-icons/hi2";

export default function BlogPost() {
  const { id } = useParams();

  const [res, setRes] = useState<[BlogPostData] | undefined>(undefined);
  const [loaded, setLoaded] = useState<Boolean>(false);
  const [postData, setPostData] = useState<BlogPostData | undefined>(undefined);
  async function FetchPosts() {
    await fetch("https://api.quinnpatwardhan.com/get-blog-posts")
      .then((res) => res.json())
      .then((r) => {
        setRes(r);

        if (id !== undefined) {
          const newID = id.replaceAll("/blog/path/", "");
          const post = r.find(
            (r: BlogPostData) =>
              r.PostTitle.replaceAll(" ", "-").replace(
                /[^a-zA-Z0-9-_]/g,
                ""
              ) === newID
          );

          if (post == null) {
            const newPost = r.find(
              (r: BlogPostData) => r.PostID === id.replaceAll("/blog/path/", "")
            );
            if (newPost == null) {
              window.location.pathname = "/404";
              return null;
            } else {
              setPostData(newPost);
              fetch(
                `https://api.quinnpatwardhan.com/log-view?postid=${newPost?.PostID}`
              );
            }
          } else {
            setPostData(post);
            fetch(
              `https://api.quinnpatwardhan.com/log-view?postid=${post?.PostID}`
            );
          }
        }
        setLoaded(true);
      });
  }

  useEffect(() => {
    FetchPosts();
  }, []);

  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{postData?.PostTitle}</title>
        <meta name="description" content={postData?.PostBlurb} />
        <time
          dateTime={new Date(
            postData !== null &&
            postData !== undefined &&
            postData.timestamp !== undefined &&
            postData.timestamp !== null
              ? new Date(parseInt(postData.timestamp))
              : Date.now()
          ).toISOString()}
        >
          {" "}
          {FormatTime(String(postData?.timestamp))}
        </time>
      </Helmet>
      {postData !== undefined ? (
        <div className="post-page-wrapper">
          <div
            style={{
              color: "black",
              width: "100%",
              margin: 0,
              marginLeft: "auto",
              marginRight: "-1em",
              maxHeight: "3em",
            }}
          >
            <HiArrowLongLeft
              style={{ fontSize: "5em" }}
              onClick={() => {
                window.location.pathname = "/blog";
              }}
            />
          </div>
          <h1 style={{ position: "relative" }}> {postData.PostTitle}</h1>
          <h2>
            By {postData.AuthorName} &#x2022; {FormatTime(postData.timestamp)}{" "}
            &#x2022; {postData.views.toString()} views
          </h2>
          <img src={postData.PostThumbnailLink} />
          <p
            dangerouslySetInnerHTML={{
              __html: postData.PostHTML,
            }}
            className="content-wrapper"
          ></p>
        </div>
      ) : (
        "Error"
      )}
    </div>
  );
}
