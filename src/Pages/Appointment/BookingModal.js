import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
        const { name, slots } = treatment;

        const handleBooking = event => {
                event.preventDefault();
                const slot = event.target.slot.value;
                setTreatment(null);
        }

        return (
                <div>
                        <input type="checkbox" id="booking-modal" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box">
                                        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 class="font-bold text-lg text-accent">{name}</h3>
                                        <form
                                                onSubmit={handleBooking}
                                                className='justify-items-center grid grid-cols-1 gap-3 mt-4'>
                                                <input type="text" disabled value={format(date, 'pp')} class="input input-bordered w-full max-w-xs" />
                                                <select class="select select-bordered w-full max-w-xs">
                                                        {
                                                                slots.map(slot => <option value={slot}>{slot}</option>)
                                                        }
                                                </select>
                                                <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                                                <input type="email" name="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                                                <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                                                <input type="submit" value="submit" class="btn btn-accent w-full max-w-xs" />
                                        </form>
                                </div>
                        </div>
                </div>
        );
};

export default BookingModal;