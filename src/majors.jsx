function BioSci() {
	return (
		<table className="sc_courselist">
			<tbody>
				<tr className="odd">
					<td className="codecol">
						<a className="class">BIO&nbsp;SCI&nbsp;2A</a>
					</td>
					<td>Freshman Seminar </td>
				</tr>
				<tr className="odd orclass">
					<td className="codecol orclass">
						or&nbsp;
						<a className="class">BIO&nbsp;SCI&nbsp;190</a>
					</td>
					<td colSpan="1"> Transfer Student Seminar</td>
				</tr>
				<tr className="even">
					<td colSpan="2">
						<span className="courselistcomment">Biological Sciences Core:</span>
					</td>
				</tr>
				<tr className="odd">
					<td className="codecol">
						<a className="class">BIO&nbsp;SCI&nbsp;93</a>
					</td>{" "}
					<td>From DNA to Organisms </td>{" "}
				</tr>{" "}
				<tr className="odd orclass">
					<td className="codecol orclass">
						or&nbsp;
						<a className="class">BIO&nbsp;SCI&nbsp;H93</a>
					</td>{" "}
					<td colSpan="1"> Honors From DNA to Organisms</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a className="class">BIO&nbsp;SCI&nbsp;94</a>
					</td>{" "}
					<td>From Organisms to Ecosystems </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a className="class">BIO&nbsp;SCI&nbsp;97</a>
					</td>{" "}
					<td>Genetics </td>{" "}
				</tr>{" "}
				<tr className="odd orclass">
					<td className="codecol orclass">
						or&nbsp;
						<a className="class">BIO&nbsp;SCI&nbsp;H97</a>
					</td>{" "}
					<td colSpan="1"> Honors Genetics</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a className="class">BIO&nbsp;SCI&nbsp;98</a>
					</td>{" "}
					<td>Biochemistry </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;99"
							className="class"
							onClick="return showCourse(this, 'BIO SCI 99');"
						>
							BIO&nbsp;SCI&nbsp;99
						</a>
					</td>{" "}
					<td>Molecular Biology </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;100"
							className="class"
							onClick="return showCourse(this, 'BIO SCI 100');"
						>
							BIO&nbsp;SCI&nbsp;100
						</a>
					</td>{" "}
					<td>Scientific Writing </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Select one of the following General Chemistry sequences:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;1A"
								className="class"
								onClick="return showCourse(this, 'CHEM 1A');"
							>
								CHEM&nbsp;1A
							</a>
							-
							<a
								title="CHEM&nbsp;1B"
								className="class"
								onClick="return showCourse(this, 'CHEM 1B');"
							>
								{" "}
								1B
							</a>
							-
							<a
								title="CHEM&nbsp;1C"
								className="class"
								onClick="return showCourse(this, 'CHEM 1C');"
							>
								{" "}
								1C
							</a>
						</div>
					</td>{" "}
					<td>
						General Chemistry
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and General Chemistry
						</span>
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and General Chemistry{" "}
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<span className="courselistcomment commentindent">
								and accompanying labs:
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;1LC"
								className="class"
								onClick="return showCourse(this, 'CHEM 1LC');"
							>
								CHEM&nbsp;1LC
							</a>
							-
							<a
								title="CHEM&nbsp;1LD"
								className="class"
								onClick="return showCourse(this, 'CHEM 1LD');"
							>
								{" "}
								1LD
							</a>
						</div>
					</td>{" "}
					<td>
						General Chemistry Laboratory
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and General Chemistry Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<span className="courselistcomment commentindent">or</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;H2A"
								className="class"
								onClick="return showCourse(this, 'CHEM H2A');"
							>
								CHEM&nbsp;H2A
							</a>
							-
							<a
								title="CHEM&nbsp;H2B"
								className="class"
								onClick="return showCourse(this, 'CHEM H2B');"
							>
								{" "}
								H2B
							</a>
							-
							<a
								title="CHEM&nbsp;H2C"
								className="class"
								onClick="return showCourse(this, 'CHEM H2C');"
							>
								{" "}
								H2C
							</a>
						</div>
					</td>{" "}
					<td>
						Honors General Chemistry
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Honors General Chemistry
						</span>
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Honors General Chemistry
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<span className="courselistcomment commentindent">
								and accompanying labs:
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;H2LA"
								className="class"
								onClick="return showCourse(this, 'CHEM H2LA');"
							>
								CHEM&nbsp;H2LA
							</a>
							-
							<a
								title="CHEM&nbsp;H2LB"
								className="class"
								onClick="return showCourse(this, 'CHEM H2LB');"
							>
								{" "}
								H2LB
							</a>
						</div>
					</td>{" "}
					<td>
						Honors General Chemistry Laboratory
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Honors General Chemistry Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Select one of the following Organic Chemistry sequences:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;51A"
								className="class"
								onClick="return showCourse(this, 'CHEM 51A');"
							>
								CHEM&nbsp;51A
							</a>
							-
							<a
								title="CHEM&nbsp;51B"
								className="class"
								onClick="return showCourse(this, 'CHEM 51B');"
							>
								{" "}
								51B
							</a>
							-
							<a
								title="CHEM&nbsp;51C"
								className="class"
								onClick="return showCourse(this, 'CHEM 51C');"
							>
								{" "}
								51C
							</a>
						</div>
					</td>{" "}
					<td>
						Organic Chemistry
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Organic Chemistry
						</span>
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Organic Chemistry
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<span className="courselistcomment commentindent">
								and accompanying labs:
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;51LB"
								className="class"
								onClick="return showCourse(this, 'CHEM 51LB');"
							>
								CHEM&nbsp;51LB
							</a>
							-
							<a
								title="CHEM&nbsp;51LC"
								className="class"
								onClick="return showCourse(this, 'CHEM 51LC');"
							>
								{" "}
								51LC
							</a>
						</div>
					</td>{" "}
					<td>
						Organic Chemistry Laboratory
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Organic Chemistry Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="CHEM&nbsp;H52LA"
								className="class"
								onClick="return showCourse(this, 'CHEM H52LA');"
							>
								CHEM&nbsp;H52LA
							</a>
							-
							<a
								title="CHEM&nbsp;H52LB"
								className="class"
								onClick="return showCourse(this, 'CHEM H52LB');"
							>
								{" "}
								H52LB
							</a>
						</div>
					</td>{" "}
					<td>
						Honors Organic Chemistry Laboratory
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Honors Organic Chemistry Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">Complete:</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;5A"
							className="class"
							onClick="return showCourse(this, 'MATH 5A');"
						>
							MATH&nbsp;5A
						</a>
					</td>{" "}
					<td>Calculus for Life Sciences I </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="MATH&nbsp;5B"
							className="class"
							onClick="return showCourse(this, 'MATH 5B');"
						>
							MATH&nbsp;5B
						</a>
					</td>{" "}
					<td>Calculus for Life Sciences II </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Select one of the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="STATS&nbsp;7"
								className="class"
								onClick="return showCourse(this, 'STATS 7');"
							>
								STATS&nbsp;7
							</a>
						</div>
					</td>{" "}
					<td>Basic Statistics </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="STATS&nbsp;8"
								className="class"
								onClick="return showCourse(this, 'STATS 8');"
							>
								STATS&nbsp;8
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Biological Statistics </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="MATH&nbsp;2D"
								className="class"
								onClick="return showCourse(this, 'MATH 2D');"
							>
								MATH&nbsp;2D
							</a>
						</div>
					</td>{" "}
					<td>Multivariable Calculus I </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="MATH&nbsp;3A"
								className="class"
								onClick="return showCourse(this, 'MATH 3A');"
							>
								MATH&nbsp;3A
							</a>
						</div>
					</td>{" "}
					<td>Introduction to Linear Algebra </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Select one of the following Physics Series:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<span className="courselistcomment areaheader commentindent">
								Series A
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="PHYSICS&nbsp;3A"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 3A');"
							>
								PHYSICS&nbsp;3A
							</a>
							-
							<a
								title="PHYSICS&nbsp;3B"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 3B');"
							>
								{" "}
								3B
							</a>
							-
							<a
								title="PHYSICS&nbsp;3C"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 3C');"
							>
								{" "}
								3C
							</a>
						</div>
					</td>{" "}
					<td>
						Basic Physics I<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Basic Physics II
						</span>
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Basic Physics III
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="PHYSICS&nbsp;3LB"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 3LB');"
							>
								PHYSICS&nbsp;3LB
							</a>
							-
							<a
								title="PHYSICS&nbsp;3LC"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 3LC');"
							>
								{" "}
								3LC
							</a>
						</div>
					</td>{" "}
					<td>
						Basic Physics Laboratory
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Basic Physics Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<span className="courselistcomment areaheader commentindent">
								Series B
							</span>{" "}
						</div>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="PHYSICS&nbsp;7C"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7C');"
							>
								PHYSICS&nbsp;7C
							</a>
							-
							<a
								title="PHYSICS&nbsp;7D"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7D');"
							>
								{" "}
								7D
							</a>
							-
							<a
								title="PHYSICS&nbsp;7E"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7E');"
							>
								{" "}
								7E
							</a>
						</div>
					</td>{" "}
					<td>
						Classical Physics
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Classical Physics
						</span>
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Classical Physics
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<div style={{ marginLeft: "20px" }}>
							<a
								title="PHYSICS&nbsp;7LC"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7LC');"
							>
								PHYSICS&nbsp;7LC
							</a>
							-
							<a
								title="PHYSICS&nbsp;7LD"
								className="class"
								onClick="return showCourse(this, 'PHYSICS 7LD');"
							>
								{" "}
								7LD
							</a>
						</div>
					</td>{" "}
					<td>
						Classical Physics Laboratory
						<br />
						<span style={{ marginLeft: "20px" }} className="blockindent">
							and Classical Physics Laboratory
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Prerequisites for all Biological Sciences Core courses are
							rigorously enforced. Students must have a 2.0 cumulative grade
							point average in the Biological Sciences Core Curriculum, four
							upper-division elective courses, and three upper-division
							laboratories.
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							Upper-Division Writing Requirement
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Students in the School of Biological Sciences have the option to
							satisfy the upper-division writing requirement by completing{" "}
							<a
								title="BIO&nbsp;SCI&nbsp;100"
								className="class"
								onClick="return showCourse(this, 'BIO SCI 100');"
							>
								BIO&nbsp;SCI&nbsp;100
							</a>{" "}
							with a minimum grade of C, followed by the completion of two
							upper-division laboratories selected from the following:
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;D111L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI D111L');"
						>
							BIO&nbsp;SCI&nbsp;D111L
						</a>
					</td>{" "}
					<td>Developmental and Cell Biology Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E106L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E106L');"
						>
							BIO&nbsp;SCI&nbsp;E106L
						</a>
					</td>{" "}
					<td>Habitats and Organisms </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E112L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E112L');"
						>
							BIO&nbsp;SCI&nbsp;E112L
						</a>
					</td>{" "}
					<td>Physiology Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E115L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E115L');"
						>
							BIO&nbsp;SCI&nbsp;E115L
						</a>
					</td>{" "}
					<td>Evolution Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E131L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E131L');"
						>
							BIO&nbsp;SCI&nbsp;E131L
						</a>
					</td>{" "}
					<td>Image Analysis in Biological Research </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E140L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E140L');"
						>
							BIO&nbsp;SCI&nbsp;E140L
						</a>
					</td>{" "}
					<td>Evolution and the Environment Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E160L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E160L');"
						>
							BIO&nbsp;SCI&nbsp;E160L
						</a>
					</td>{" "}
					<td>Biology of Birds Lab </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E166L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E166L');"
						>
							BIO&nbsp;SCI&nbsp;E166L
						</a>
					</td>{" "}
					<td>Field Biology </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E179L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E179L');"
						>
							BIO&nbsp;SCI&nbsp;E179L
						</a>
					</td>{" "}
					<td>Field Freshwater Ecology </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;E186L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI E186L');"
						>
							BIO&nbsp;SCI&nbsp;E186L
						</a>
					</td>{" "}
					<td>Population and Community Ecology Lab </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;M114L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI M114L');"
						>
							BIO&nbsp;SCI&nbsp;M114L
						</a>
					</td>{" "}
					<td>Biochemistry Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;M116L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI M116L');"
						>
							BIO&nbsp;SCI&nbsp;M116L
						</a>
					</td>{" "}
					<td>Molecular Biology Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;M118L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI M118L');"
						>
							BIO&nbsp;SCI&nbsp;M118L
						</a>
					</td>{" "}
					<td>Experimental Microbiology Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;M121L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI M121L');"
						>
							BIO&nbsp;SCI&nbsp;M121L
						</a>
					</td>{" "}
					<td>Advanced Immunology Laboratory </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;N123L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI N123L');"
						>
							BIO&nbsp;SCI&nbsp;N123L
						</a>
					</td>{" "}
					<td>Human Neuroimaging Lab </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;M130L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI M130L');"
						>
							BIO&nbsp;SCI&nbsp;M130L
						</a>
					</td>{" "}
					<td>Advanced Molecular Lab Techniques </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;N113L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI N113L');"
						>
							BIO&nbsp;SCI&nbsp;N113L
						</a>
					</td>{" "}
					<td>Neurobiology Laboratory </td>{" "}
				</tr>{" "}
				<tr className="odd">
					{" "}
					<td className="codecol">
						{" "}
						<a
							title="BIO&nbsp;SCI&nbsp;N123L"
							className="class"
							onClick="return showCourse(this, 'BIO SCI N123L');"
						>
							BIO&nbsp;SCI&nbsp;N123L
						</a>
					</td>{" "}
					<td>Human Neuroimaging Lab </td>{" "}
				</tr>{" "}
				<tr className="even">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							Students must earn a grade of C or better in each of the two
							laboratories selected. Completion of{" "}
							<a
								title="BIO&nbsp;SCI&nbsp;199W"
								className="class"
								onClick="return showCourse(this, 'BIO SCI 199W');"
							>
								BIO&nbsp;SCI&nbsp;199W
							</a>{" "}
							or Excellence in Research in Biological Sciences program may count
							as one of the two upper-division labs.
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="odd areaheader">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment areaheader">
							School Residence Requirement
						</span>{" "}
					</td>{" "}
				</tr>{" "}
				<tr className="even lastrow">
					{" "}
					<td colSpan="2">
						{" "}
						<span className="courselistcomment">
							After matriculation, all courses required for the major must be
							successfully completed at UCI. Students must be a major in the
							School of Biological Sciences for the 3 academic quarters
							(excluding summer session) immediately preceding degree
							certification.The School of Biological Sciences strictly enforces
							the UCI residence requirement. At least 36 of the final 45 units
							completed by a student for the bachelor’s degree must be earned in
							residence at the UCI campus. (The School considers courses taken
							in the UC Education Abroad Program to be in-residence courses.){" "}
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

function BioSciSample() {
	return (
		<table width="100%">
			<tbody>
				<tr className="odd">
					<td>
						<a className="class">BIO SCI 99</a>
					</td>
				</tr>
				<tr className="even">
					<td>
						<a className="class">CHEM 51C</a>- <a className="class">51LC</a>
					</td>
				</tr>
				<tr className="odd">
					<td>
						<a className="class">STATS 7</a>, <a className="class">8</a>,{" "}
						<a className="class">MATH 2D</a>, or{" "}
						<a className="class">MATH 3A</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export { BioSci, BioSciSample };
