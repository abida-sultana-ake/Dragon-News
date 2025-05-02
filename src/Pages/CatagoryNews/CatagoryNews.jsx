import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router";

const CatagoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [CatagoryNews, setCatagoryNews] = useState([]);
  //console.log(id, data);
  useEffect(() => {
    if (id == "0") {
      setCatagoryNews(data);
      return;
    } else if (id == "1") {
      const filterdNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCatagoryNews(filterdNews);
    } else {
      const filterdNews = data.filter((news) => news.category_id == id);
      console.log(filterdNews);
      setCatagoryNews(filterdNews);
    }
    const filterdNews = data.filter((news) => news.category_id == id);
    console.log(filterdNews);
    setCatagoryNews(filterdNews);
  }, [data, id]);
  return <div>Total {CatagoryNews.length} News Found</div>;
};

export default CatagoryNews;