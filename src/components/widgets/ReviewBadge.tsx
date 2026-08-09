import { Star, ExternalLink, PenLine } from "lucide-react";
import { reviewPlatforms } from "@/lib/content";

export default function ReviewBadge() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {reviewPlatforms.map((platform) => (
        <div
          key={platform.name}
          className="bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
        >
          <h3 className="font-serif text-xl text-charcoal mb-3">
            {platform.name}
          </h3>

          {platform.stars > 0 ? (
            <>
              <div className="flex gap-1 mb-2">
                {[...Array(platform.stars)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-sunset fill-sunset" />
                ))}
              </div>
              <p className="text-2xl font-serif text-charcoal">
                {platform.rating}
              </p>
              <p className="text-sm text-gray-500">
                {platform.reviewCount} {platform.reviewLabel}
              </p>
              {platform.platformNote !== "" && (
                <p className="text-xs text-gray-400 mt-1">
                  {platform.platformNote}
                </p>
              )}
            </>
          ) : (
            <p className="text-sm text-gray-500">{platform.platformNote}</p>
          )}

          <div className="mt-auto pt-6 flex flex-wrap gap-3">
            <a
              href={platform.listingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-savanna hover:bg-savanna-dark text-white text-sm font-medium transition-colors"
              aria-label={`View listing: Cluster Leaf Safaris on ${platform.name}`}
            >
              <ExternalLink className="h-4 w-4" />
              View listing
            </a>
            <a
              href={platform.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-savanna text-savanna hover:bg-savanna/5 text-sm font-medium transition-colors"
              aria-label={`Write a review on ${platform.name} for Cluster Leaf Safaris`}
            >
              <PenLine className="h-4 w-4" />
              Write a review
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
