CREATE TABLE classroom (
	building varchar(15),
    room_number varchar(17),
    capacity numeric(4, 0),
    PRIMARY KEY (building, room_number)
);

CREATE TABLE department (
	dept_name varchar(20),
    building varchar(15),
    budget numeric(12, 2),
    PRIMARY KEY (dept_name)
);

CREATE TABLE course (
	course_id varchar(7),
	title varchar(50),
	dept_name varchar(20),
	credits numeric(2, 0),
    PRIMARY KEY (course_id),
    FOREIGN KEY (dept_name)
		REFERENCES department (dept_name)
		ON DELETE SET NULL
);

CREATE TABLE instructor (
	ID varchar(5),
    name varchar(20),
    dept_name varchar(20),
    salary numeric(8, 2),
    PRIMARY KEY (ID),
    FOREIGN KEY (dept_name)
		REFERENCES department (dept_name)
        ON DELETE SET NULL
);

CREATE TABLE section (
	course_id varchar(8),
	sec_id varchar(8),
	semester varchar(6),
	year numeric(4, 0),
	building varchar(15),
	room_number varchar(7),
	time_slot_id varchar(4),
	PRIMARY KEY (course_id, sec_id, semester, year),
	FOREIGN KEY (course_id)
		REFERENCES course (course_id)
		ON DELETE CASCADE,
	FOREIGN KEY (building, room_number)
		REFERENCES classroom (building, room_number)
		ON DELETE SET NULL
);

CREATE TABLE teaches (
	ID varchar(5),
    course_id varchar(8),
    sec_id varchar(8),
    semester varchar(6),
    year numeric(4, 0),
    PRIMARY KEY (ID, course_id, sec_id, semester, year),
    FOREIGN KEY (course_id, sec_id, semester, year)
		REFERENCES section (course_id, sec_id, semester, year)
        ON DELETE CASCADE,
	FOREIGN KEY (ID)
		REFERENCES instructor (ID)
        ON DELETE CASCADE
);

CREATE TABLE student (
	ID varchar(5),
    name varchar(20),
    dept_name varchar(20),
    tot_cred numeric(3, 0),
    PRIMARY KEY (ID),
    FOREIGN KEY (dept_name)
		REFERENCES department (dept_name)
        ON DELETE SET NULL
);

CREATE TABLE takes (
	ID varchar(5),
    course_id varchar(8),
    sec_id varchar(8),
    semester varchar(6),
    year numeric(4, 0),
    grade varchar(2),
    PRIMARY KEY (ID, course_id, sec_id, semester, year),
    FOREIGN KEY (course_id, sec_id, semester, year)
		REFERENCES section (course_id, sec_id, semester, year)
        ON DELETE CASCADE,
	FOREIGN KEY (ID)
		REFERENCES student (ID)
        ON DELETE CASCADE
);

CREATE TABLE advisor (
	s_ID varchar(5),
    i_ID varchar(5),
    PRIMARY KEY (s_ID),
    FOREIGN KEY (i_ID)
		REFERENCES instructor (ID)
        ON DELETE SET NULL,
	FOREIGN KEY (s_ID)
		REFERENCES student (ID)
        ON DELETE CASCADE
);

CREATE TABLE prereq (
	course_id varchar(8),
    prereq_id varchar(8),
    PRIMARY KEY (course_id, prereq_id),
    FOREIGN KEY (course_id)
		REFERENCES course (course_id)
        ON DELETE CASCADE,
	FOREIGN KEY (prereq_id)
		REFERENCES course (course_id)
);

CREATE TABLE timeslot (
	time_slot_id varchar(4),
    day varchar(2),
    start_time time,
    end_time time,
    PRIMARY KEY (time_slot_id, day, start_time)
);