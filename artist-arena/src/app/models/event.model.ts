import { Venue } from '../models/venue.model';
import { Offer } from '../models/offer.model';

export class Event {
  id:	string;
  artist_id:	string;
  url:	string;
  on_sale_datetime: string;
  datetime:	string;
  description: string;
  venue:	Venue[];
  offers: Offer[];
  lineup: string[];
  }
