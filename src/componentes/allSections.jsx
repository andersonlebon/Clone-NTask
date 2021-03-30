import React from "react";
import background2 from "../image&&logs/background/homepage_collaboration.svg";
import background3 from "..//image&&logs/background/homepage_kanban.svg";
import background4 from "..//image&&logs/background/homepage_planning.svg.svg";
import background5 from "..//image&&logs/background/homepage_task_management.svg";
import background6 from "..//image&&logs/background/slack_element1.svg";
import icon2 from "../image&&logs/icons/homeiconGantt.svg";
import icon3 from "../image&&logs/icons/iconIssues.svg";
import icon4 from "../image&&logs/icons/iconMeeting.svg";
import icon5 from "../image&&logs/icons/iconTask_blue.svg";
import icon6 from "../image&&logs/icons/iconTask_green.svg";
import icon7 from "../image&&logs/icons/kanban_icon.svg";
import project2 from "../image&&logs/projects/homeProject1.png";
import project3 from "../image&&logs/projects/homeProject2.png";
import project4 from "../image&&logs/projects/homeProject4.svg";
import project5 from "../image&&logs/projects/homeProject5.png";
import project6 from "../image&&logs/projects/homeProject5.png";
import Side from "./common/sectionSide";
import SectionTwo from "./sectionTwo";
import Image from "./common/imageProject";
import ListContent from "./common/contentList";
import SectionOne from "./SectionOne";
import intergrationImg from "../image&&logs/background/illustrationIntegrations.png";
import Testimony from "./common/testimony";
import avatar1 from "../image&&logs/Avatar-2.png";
import avatar2 from "../image&&logs/Avatar-3.png";
import avatar3 from "../image&&logs/Avatar-4.png";
import Footer from "./footer";

const AllSection = (props) => {
  return (
    <div class="all-side">
      <SectionOne />
      <SectionTwo />
      <div className="side">
        <Side
          iconOne={icon2}
          content="Transparent Work Management"
          headingOne="Organize Your Workflows on Kanban Boards"
          paragrepheOne="Run any process or project to manage your work on Kanban Boards for continuous delivery, more flexibilityand increased efficiency to help your team to maintain focus."
          listTitle="KANBAN FEATURES::"
          list1=" Project Planning"
          list2="Budgeting and Financial Summary"
          list3="Allocation"
          list4=" Set Milestones"
          class="hovere"
        />
        <div className="projects">
          <Image
            background={background2}
            image={project2}
            class="background bg"
          />
        </div>
      </div>
      <div className="side">
        <div className="projects">
          <Image
            background={background3}
            image={project3}
            class="background bg"
          />
        </div>
        <Side
          iconOne={icon3}
          content="Transparent Work Management"
          headingOne="Organize Your Workflows on Kanban Boards"
          paragrepheOne="Run any process or project to manage your work on Kanban Boards for continuous delivery, more flexibilityand increased efficiency to help your team to maintain focus."
          listTitle="KANBAN FEATURES:"
          list1=" Project Planning"
          list2="Budgeting and Financial Summary"
          list3="Allocation"
          list4=" Set Milestones"
          class="colore hovere"
        />
      </div>
      <div className="side">
        <Side
          iconOne={icon4}
          content="Transparent Work Management"
          headingOne="Organize Your Workflows on Kanban Boards"
          paragrepheOne="Run any process or project to manage your work on Kanban Boards for continuous delivery, more flexibilityand increased efficiency to help your team to maintain focus."
          listTitle="KANBAN FEATURES::"
          list1=" Project Planning"
          list2="Budgeting and Financial Summary"
          list3="Allocation"
          list4=" Set Milestones"
          class="color2 hovere"
        />
        <div className="projects">
          <Image
            background={background4}
            image={project4}
            class="background bg"
          />
        </div>
      </div>
      <div className="side">
        <div className="projects">
          <Image
            background={background5}
            image={project5}
            class="background bg"
          />
        </div>
        <Side
          iconOne={icon6}
          content="Transparent Work Management"
          headingOne="Organize Your Workflows on Kanban Boards"
          paragrepheOne="Run any process or project to manage your work on Kanban Boards for continuous delivery, more flexibilityand increased efficiency to help your team to maintain focus."
          listTitle="KANBAN FEATURES:"
          list1=" Project Planning"
          list2="Budgeting and Financial Summary"
          list3="Allocation"
          list4=" Set Milestones"
          class="color3 hovere"
        />
      </div>
      <div className="side">
        <Side
          iconOne={icon5}
          content="Transparent Work Management"
          headingOne="Organize Your Workflows on Kanban Boards"
          paragrepheOne="Run any process or project to manage your work on Kanban Boards for continuous delivery, more flexibilityand increased efficiency to help your team to maintain focus."
          listTitle="KANBAN FEATURES::"
          list1=" Project Planning"
          list2="Budgeting and Financial Summary"
          list3="Allocation"
          list4=" Set Milestones"
          class="color4 hovere"
        />
        <div className="projects">
          <Image
            background={background6}
            image={project6}
            class="background bg"
          />
        </div>
      </div>
      <div className="sectionThree">
        <div className="list-Cont">
          <ListContent
            icon={icon7}
            title="To-Do List"
            linkTo="#"
            paragraph="Create to-do lists in the form of a checklist in your tasks with just a few clicks so nothing falls through cracks."
          />
          <ListContent
            icon={icon3}
            title="Issue Tracking"
            linkTo="#"
            paragraph="nTask gives you the ability to manage, monitor and evaluate the risk impact with the help of risk matrix, mitigation plans & risk updates."
          />
          <ListContent
            icon={icon4}
            title="Meeting Management"
            linkTo="#"
            paragraph="Create to-do lists in the form of a checklist in your tasks with just a few clicks so nothing falls through cracks."
          />
          <ListContent
            icon={icon5}
            title="Kanban Board"
            linkTo="#"
            paragraph="Create to-do lists in the form of a checklist in your tasks with just a few clicks so nothing falls through cracks."
          />
          <ListContent
            icon={icon3}
            title="Risk Management"
            linkTo="#"
            paragraph="No need to switch apps to manage your meetings. You can set meeting agenda, record discussion points, set follow-up actions, and create recurring meetings."
          />
          <ListContent
            icon={icon7}
            title="Timesheets"
            linkTo="#"
            paragraph="Manage and track your remote team’s time with the help of timesheets, and task timer. Share timesheet for approval and print in PDF format."
          />
        </div>
        <div className="integration">
          <div className="text-content">
            <div className="text">
              <h2>Work with Your Favorite Apps Using nTask</h2>
              <p>
                nTask teams up with your favorite software. Integrate with over
                1000+ apps with Zapier to have all the tools you need for your
                project success.
              </p>
              <div className="button">View all integration</div>
            </div>
          </div>
          <div className="img">
            <img src={intergrationImg} alt="" />
          </div>
        </div>
        <div className="testM">
          <Testimony
            paragraph=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          provident, hic odio consectetur ad animi quas vitae distinctio
          udantium est ipsum."
            name="Michelle Nickolaisen"
            job="Content Marketer & Strategist @Bombchelle"
            image={avatar1}
          />
          <Testimony
            paragraph=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          provident, hic odio consectetur ad animi quas vitae distinctio
          udantium est ipsum."
            name="Michelle Nickolaisen"
            job="Content Marketer & Strategist @Bombchelle"
            image={avatar2}
          />
          <Testimony
            paragraph=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          provident, hic odio consectetur ad animi quas vitae distinctio
          udantium est ipsum."
            name="Caleb Buyana Anderson"
            job="software ingeniour & Strategist @Bombchelle"
            image={avatar3}
          />
        </div>
        <div className="getStarted">
          <div className="getStarted-content">
            <div className="bg1"></div>
            <div className="bg2"></div>
            <div className="g-text">
              <div className="text-area">
                <h2>Ready to up your game with nTask?</h2>
                <p>
                  Manage your team, tasks, projects and more on a single
                  platform. Sign up today, it's free.
                </p>
              </div>
              <div className="g-buttons">
                <button className="g-button b-hover">book a demo</button>
                <button className="g-button">try fro free</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AllSection;
