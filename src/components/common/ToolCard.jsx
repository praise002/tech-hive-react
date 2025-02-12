import Image from './Image';
import Tags from './Tags';
import Text from './Text';
import Button from './Button';
import PropTypes from 'prop-types';

function ToolCard({ tool }) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg h-full flex flex-col">
      <Image
        alt={tool.toolName}
        src={tool.toolImage}
        className="flex-shrink-0"
      />

      <div className="flex flex-col justify-between flex-grow p-5 border-l border-r border-b border-[#C1C8C7] rounded-bl-lg rounded-br-lg overflow-hidden">
        <div className="space-y-2">
          <Text variant="h4" size="xl" bold={false} className="font-semibold">
            {tool.toolName}
          </Text>
          <div className="text-sm md:text-base text-[#262a2a]">
            {tool.toolDescription}
          </div>
          <Tags tags={tool.toolCategories} />
        </div>

        <div className='mt-2'>
          <Button className="text-xs w-auto" variant="outline">
            {tool.callToAction}
          </Button>
        </div>
      </div>
    </div>
  );
}

ToolCard.propTypes = {
  tool: PropTypes.shape({
    toolName: PropTypes.string.isRequired,
    toolImage: PropTypes.string.isRequired,
    toolDescription: PropTypes.string.isRequired,
    toolCategories: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
    callToAction: PropTypes.string.isRequired,
  }).isRequired,
};

export default ToolCard;
