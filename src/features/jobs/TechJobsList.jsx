import Button from '../../components/common/Button';
import JobPostingCard from '../../components/common/JobPostingCard';
import Text from '../../components/common/Text';
import { techJobs } from '../../data/jobs';

function TechJobsList() {
  return (
    <div className="pt-20 lg:pt-20 max-w-7xl mx-auto px-4 lg:px-8 mb-4">
      <div className="my-4">
        <Text variant="h3" size="xl" className="sm:2xl dark:text-custom-white">
          All Jobs
        </Text>
        <div className="w-[20px]">
          <hr className="border-b-2 border-red" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 h-full">
        {techJobs.map((job) => (
          <JobPostingCard key={job.id} job={job} />
        ))}
      </div>

      {/* Static Pagination */}
      <div className="max-w-7xl mx-auto mt-8 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Button variant="primary">Previous</Button>

          <span className="text-gray-600">Page 1 of 5</span>
          <Button variant="primary">Next</Button>
        </div>
      </div>
    </div>
  );
}

export default TechJobsList;
