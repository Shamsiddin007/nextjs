"use client";
import { useState } from "react";
import HomeCard from "./HomeCard";
import { AiOutlinePlus } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { BsCameraVideo } from "react-icons/bs";
import { PiUserPlus } from "react-icons/pi";
import MeetingModal from "./MeetingModal";

function MeetingTypeList() {
  // const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    | "isScheduleMeeting"
    | "isJoinMeeting"
    | "isInstantMeeting"
    | "isViewRecordings"
    | undefined
  >();

  const createMeeting = () => {
    // Add your createMeeting logic here
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img={<AiOutlinePlus className="text-[27px]" />}
        title="New Meeting" 
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        img={<CiCalendar className="text-[27px]" />}
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-blue-1"
      />
      <HomeCard
        img={<BsCameraVideo className="text-[27px]" />}
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => setMeetingState("isJoinMeeting")}
        className="bg-purple-1"
      />
      <HomeCard
        img={<PiUserPlus className="text-[27px]" />}
        title="Join Meeting"
        description="Via invitation link"
        handleClick={() => setMeetingState("isJoinMeeting")}
        className="bg-yellow-1"
      />

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting} 
         />
    </section>
  );
}

export default MeetingTypeList;
