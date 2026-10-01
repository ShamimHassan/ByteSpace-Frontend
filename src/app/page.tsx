"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const categories = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking"];
const courses = [
  { title: "Learn Figma from Basic", image: "/assets/course-1.png", category: "Design", level: "Beginner", price: "$25", rating: "4.5" },
  { title: "Build Digital Asset", image: "/assets/course-2.png", category: "Development", level: "Beginner", price: "$25", rating: "4.5" },
  { title: "The Power of Big Data", image: "/assets/course-3.png", category: "Data Science", level: "Intermediate", price: "$25", rating: "4.5" },
  { title: "Balancing Productivity and Self-Care", image: "/assets/course-4.png", category: "Productivity", level: "Beginner", price: "$25", rating: "4.5" },
  { title: "Mastering Money Management", image: "/assets/course-5.png", category: "Business", level: "Beginner", price: "$25", rating: "4.5" },
  { title: "From Idea to Startup Success", image: "/assets/course-6.png", category: "Business", level: "Advanced", price: "$25", rating: "4.5" },
];
const avatars = ["/assets/student-1.png", "/assets/student-2.png", "/assets/student-3.png", "/assets/student-4.png"];

function Logo() {
  return <a className={styles.logo} href="#top" aria-label="ByteSpace home"><span className={styles.logoMark}>B</span><span>ByteSpace</span></a>;
}

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  return (
    <article className={styles.courseCard}>
      <div className={styles.courseImage}>
        <Image src={course.image} alt={course.title} fill sizes="(max-width: 760px) 90vw, 340px" />
        <div className={styles.imageTags}><span>17 Lessons</span><span>2 hours 16 mins</span><span>59 Comments</span></div>
      </div>
      <div className={styles.courseBody}>
        <div className={styles.courseTitle}><h3>{course.title}</h3><span className={styles.rating}>{course.rating} <b>★</b></span></div>
        <p className={styles.creator}>by <a href="#creators">purepearl studio</a></p>
        <div className={styles.courseMeta}><span className={styles.level}>▥ &nbsp;{course.level}</span><div className={styles.avatarStack}>{avatars.map((avatar) => <Image key={avatar} src={avatar} alt="" width={32} height={32} />)}<span>26+</span></div></div>
        <p className={styles.price}>{course.price}<small>/lifetime</small></p>
      </div>
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Featured");
  const filteredCourses = useMemo(() => courses.filter((course) => {
    const matchesQuery = `${course.title} ${course.category}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (activeCategory === "Featured" || course.category === activeCategory);
  }), [activeCategory, query]);
  const submitSearch = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" }); };

  return <main id="top" className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroGlow} />
      <header className={styles.header}><Logo /><nav><a className={styles.activeLink} href="#top">Home</a><a href="#courses">Courses</a><a href="#creators">Creators</a></nav><div className={styles.headerActions}><a href="#signin">Sign In</a><a href="#join">Join Us</a><button aria-label="Open menu">☰</button></div></header>
      <div className={styles.heroContent}><p className={styles.eyebrow}>Learn without limits</p><h1>Get Access to Hundreds Courses Available</h1><p className={styles.heroCopy}>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p><form className={styles.searchBar} onSubmit={submitSearch}><label><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Course, topic, creator" aria-label="Search courses" /></label><button type="submit">Search</button></form></div>
      <div className={styles.heroVisual}><Image src="/assets/hero.png" alt="Creative course preview" fill priority sizes="(max-width: 760px) 88vw, 580px" /><div className={`${styles.floatingCard} ${styles.progressCard}`}><span>Learning Progress</span><strong>55%</strong><i><b /></i></div><div className={`${styles.floatingCard} ${styles.studentCard}`}><strong>Happy Students</strong><span>4.5 ★ <small>(240)</small></span><div className={styles.avatarStack}>{avatars.map((avatar) => <Image key={avatar} src={avatar} alt="" width={43} height={43} />)}<em>2K+</em></div></div><div className={`${styles.floatingCard} ${styles.topicCard}`}><strong>UI/UX Design</strong><span>200 Courses · 1000+ Students</span></div></div>
    </section>

    <section className={styles.partners} aria-label="Partner companies"><span>Trusted by learners at</span><strong>pixelhouse</strong><strong>Figma</strong><strong>notion</strong><strong>Framer</strong><strong>Webflow</strong></section>

    <section className={styles.introSection}><p className={styles.sectionKicker}>Explore your potential</p><h2>Discover Your Passion, Build Your Skills</h2><p>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p></section>

    <section className={styles.categoriesSection}><div className={styles.sectionHeading}><div><p className={styles.sectionKicker}>Featured Categories</p><h2>Innovative Paths to Knowledge</h2></div><a className={styles.lightButton} href="#all-categories">View More <span>↗</span></a></div><div className={styles.categoryTiles}>{["Design", "Development", "IT & Software", "Business", "Marketing", "Photography"].map((category, index) => <button key={category} className={styles.categoryTile} onClick={() => { setActiveCategory(category); document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" }); }}><span>{["✦", "⌘", "▣", "◒", "◎", "◉"][index]}</span>{category}</button>)}</div></section>

    <section id="courses" className={styles.courseSection}><div className={styles.sectionHeading}><div><p className={styles.sectionKicker}>Curated for you</p><h2>Featured Courses</h2></div><p className={styles.resultNote}>{filteredCourses.length} courses available</p></div><div className={styles.tabs}>{categories.slice(0, 9).map((category) => <button key={category} className={activeCategory === category ? styles.tabActive : ""} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><div className={styles.courseGrid}>{filteredCourses.length ? filteredCourses.map((course) => <CourseCard key={course.title} course={course} />) : <p className={styles.emptyState}>No courses found. Try another search.</p>}</div></section>

    <section id="creators" className={styles.growthSection}><div className={styles.growthCopy}><p className={styles.sectionKicker}>Learn from the best</p><h2>Your Path to Professional Growth Starts Here!</h2><p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p><div className={styles.stats}><div><strong>12K</strong><span>Students</span></div><div><strong>70+</strong><span>Courses</span></div><div><strong>16</strong><span>Creators</span></div></div></div><div className={styles.growthVisual}><Image src="/assets/feature.png" alt="Course dashboard preview" fill sizes="(max-width: 760px) 90vw, 620px" /><div className={styles.revenueCard}><span>Total Revenue</span><strong>$120.29</strong><b>+12%</b></div></div></section>

    <section id="join" className={styles.ctaSection}><div><p className={styles.sectionKicker}>Start learning today</p><h2>Make room for a smarter future.</h2><p>Find the course that moves your next idea forward.</p></div><a className={styles.darkButton} href="#signin">Join ByteSpace <span>↗</span></a></section>
    <footer className={styles.footer}><Logo /><p>Knowledge that keeps moving with you.</p><div><a href="#courses">Courses</a><a href="#creators">Creators</a><a href="#signin">Sign In</a></div></footer>
  </main>;
}
